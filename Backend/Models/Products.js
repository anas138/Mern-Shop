const getDb = require('../utils/dbConnection').getDb
const mongodb=require("mongodb")
const ObjectId=mongodb.ObjectId
class Products {
    constructor(title, price, description, imageUrl) {
        this.title = title
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
    }

    save() {
        const db = getDb()
        return db.collection('products').insertOne(this)
            .then((res) => {
               return console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    static getAllProducts(){
        const db = getDb()
        return db.collection('products').find().toArray()
        .then((data)=>{
            return data
        })
        .catch((err=>{
            console.log(err)
        }))

    }

    static delProduct=(id)=>{
        const db = getDb()
        return db.collection('products').deleteOne({_id:new ObjectId(id)})
        .then(res=>{
            console.log(res)
            return res
        })
        .then((err)=>{
            console.log(err)
        })
    }
    static updtProduct=(data)=>{
        const db=getDb()
        return db.collection('products').updateOne({_id:new ObjectId(data._id)},{$set:{title:data.title,description:data.description,price:data.price,imageUrl:data.imageUrl}})
        .then(data=>{
            console.log(data)
            return data;
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
module.exports = Products