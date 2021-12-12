const getDb=require("../utils/dbConnection").getDb
const jwt = require("jsonwebtoken")
class Users{
static addUsers=(user)=>{
const db = getDb()
return  db.collection("users").insertOne({name:user.name,email:user.email,password:user.password})
.then((res)=>{
    console.log(res);
    return res
})
.catch((err)=>{
    console.log(err)
})
}

static signIn=(data)=>{
    const db = getDb()
   return db.collection("users").find({email:data.email,password:data.password}).toArray()
    .then(res=>{
        console.log(res,"data")
        if(res.length!==0){
           const token=jwt.sign({email:data.email,password:data.password},"aniHadin")
           return token
        }
    })
    .catch(err=>{
        console.log(err)
    })
}
}

module.exports=Users