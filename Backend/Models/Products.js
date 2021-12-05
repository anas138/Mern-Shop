const getDb = require('../utils/dbConnection').getDb
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
}
module.exports = Products