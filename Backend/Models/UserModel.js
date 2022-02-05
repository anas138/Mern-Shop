const getDb = require("../utils/dbConnection").getDb
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb')
const object = mongodb.ObjectId
class Users {
    static addUsers = async(user) => {
        const db = getDb()
        const findUser = await db.collection("users").findOne({email: user.email})
        console.log(findUser)
        if(!findUser){
        return db.collection("users").insertOne({ name: user.name, email: user.email, password: user.password,cart:{items:[]},status:"logout" })
            .then((res) => {
                console.log(res);
                return res
            })
            .catch((err) => {
                console.log(err)
            })
        }
        if(findUser){
            return {
                res:"user already exist"
            }
        }
    }

    static signIn = (data) => {
        const db = getDb()
        db.collection("users").updateOne({ email: data.email, password: data.password},{$set:{status:"login"}})
        return db.collection("users").find({ email: data.email, password: data.password }).toArray()
            .then(res => {
                console.log(res, "data")
                if (res.length !== 0) {
                    const token = jwt.sign({ email: data.email, password: data.password}, "aniHadin")
                    return {
                          token,
                           res
                    }
                }

               
            })
            .catch(err => {
                console.log(err)
            })
    }
    static addToCartModel = async (data) => {
        const token = jwt.verify(data.user, "aniHadin")
        const email = token.email
        const db = getDb();
        const item = {
            productId: object(data.productId),
            quantity: data.quantity
        }
        const useProduct = await db.collection("users").findOne({ email: token.email })
        let items=[]
        let it=undefined
        console.log(useProduct,"aaa");
         if(useProduct.cart.items.length){
           items = useProduct.cart.items
           console.log("unnn")
         }
        console.log(items,"iteA")
        
        if(items.length){
             it = items.find((p) => {
                return (p.productId.toString() === (item.productId).toString())
            })
        }
        
        console.log(it,'it')
        if (it==undefined) {
            db.collection("users").updateOne({ email: email }, { $set: { cart: { items: [item, ...items] } } })
        }
        if (it) {
            db.collection("users").updateOne({ email: email, "cart.items.productId": item.productId }, { $set: { "cart.items.$.quantity": it.quantity + 1 } })
        }
    }
    static getCartProducts = (userToKen) => {
        const db = getDb()
        const token = jwt.verify(userToKen, "aniHadin")
        if (token) {
            return db.collection("users").findOne({ email: token.email })
                .then(user => {
                    console.log(user)
                    let products = user.cart.items
                    console.log(products, 'p')
                    const productId = products.map(p => {
                        return p.productId
                    })
                    console.log(productId, 'id')

                    return db.collection("products").find({ _id: { $in: productId } }).toArray()
                        .then(allProducts => {
                            console.log(allProducts, "allProducts")
                            return allProducts.map(p => {
                                return {
                                    ...p,
                                    quantity: products.find(q => {
                                        if (q.productId.toString() === p._id.toString()) {
                                            console.log(q.quantity, "q")
                                            return q.quantity
                                        }
                                    }).quantity
                                }
                            })

                        })
                        .catch(err => {
                            return err
                        })
                })
                .catch(err => {
                    return err
                })
        }

    }
    static Users=()=>{
        const db = getDb()
           return   db.collection("users").find().toArray()
        .then(user=>{
            return user
        })
        .catch(err=>{
            return err
        })

    }
    static addMessage=async(messages)=>{
        if(messages.senderId && messages.receiverId ){
            const db = getDb()
        const exixtUsers= await db.collection("users").find({_id:new object(messages.senderId),_id:new object(messages.receiverId)}).toArray()
        if(exixtUsers){
        return db.collection("messages").insertOne({senderId:messages.senderId,receiverId:messages.receiverId,text:messages.text})
          .then(res=>{
              return res
          })
          .catch(err=>{
              return err
          })
        }
        }
    }
    static message=(id1,id2)=>{
        const db = getDb()
        return db.collection("messages").find({$or:[ {senderId:id1,receiverId:id2},{senderId:id2,receiverId:id1}] }).toArray()
        .then(msg=>{
            console.log(msg,"msg")
            return msg
        })
        .catch(err=>{
            return err
        })
    }
}

module.exports = Users