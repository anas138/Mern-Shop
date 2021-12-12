const User = require("../Models/UserModel")
exports.handleSignUp=(req,res,next)=>{
    User.addUsers(req.body)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
exports.singnInHandle=(req,res,next)=>{
    console.log(req.body)
   User.signIn(req.body)
   .then(data=>{
       if(data){
       console.log(data)
       res.send(data)
       }
       else{
           res.status("500").send({
               message:"error"
           })
       }
   })
   .catch((err)=>{
       console.log(err)
   })
}