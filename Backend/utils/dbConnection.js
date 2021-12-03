const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
let _db
const dbConnect = () => {
    
    mongoClient.connect("mongodb+srv://anas:anas@cluster0.rhmhv.mongodb.net/shop?retryWrites=true&w=majority")
        .then((client) => {
            return console.log(client),
                   _db=client.db()
        })
        .catch((err) => {
            console.log(err)
        })
}

const getDb=()=>{
    return _db
}
 
exports.dbConnect = dbConnect
exports.getDb=getDb