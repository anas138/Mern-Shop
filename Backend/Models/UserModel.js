const getDb = require("../utils/dbConnection").getDb
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb')
const object = mongodb.ObjectId
class Users {
    static addUsers = (user) => {
        const db = getDb()
        return db.collection("users").insertOne({ name: user.name, email: user.email, password: user.password })
            .then((res) => {
                console.log(res);
                return res
            })
            .catch((err) => {
                console.log(err)
            })
    }

    static signIn = (data) => {
        const db = getDb()
        db.collection("user").updateOne({ email: data.email, password: data.password},{$set:{status:"login"}})
        .then(res=>{
            console.log(res,"anasRes")
        }).catch()
        return db.collection("users").find({ email: data.email, password: data.password }).toArray()
            .then(res => {
                console.log(res, "data")
                if (res.length !== 0) {
                    const token = jwt.sign({ email: data.email, password: data.password }, "aniHadin")
                    return token
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
        const items = useProduct.cart.items
        const it = items.find((p) => {
            return (p.productId.toString() === (item.productId).toString())
        })
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
}

module.exports = Users