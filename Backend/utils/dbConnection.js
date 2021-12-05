const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
let _db
const dbConnect = (callback) => {
    
    mongoClient.connect("mongodb+srv://anas:anas@cluster0.rhmhv.mongodb.net/shop?retryWrites=true&w=majority")
        .then((client) => {
            console.log('connected')
             callback(client),
             _db=client.db()
             
        })
        .catch((err) => {
            console.log(err)
        })
}

const getDb=()=>{
    if(_db){
        return _db
    }
    else {
        console.log("db not connected")
    }
    
}
 
exports.dbConnect = dbConnect
exports.getDb=getDb