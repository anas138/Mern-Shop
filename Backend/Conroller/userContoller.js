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

exports.AddToCart=(req,res,next)=>{
        console.log(req.body)
        User.addToCartModel(req.body)
}
exports.getCartItem=(req,res,next)=>{
  const token = req.query.token;
  //console.log(token)
  User.getCartProducts(token)
  .then(data=>{
      res.send(data)
      console.log(data)
  })
  .catch(err=>{
      res.send(err)
  })
}
exports.getUsers=(req,res,next)=>{
    User.Users()
    .then(user=>{
      res.status("200").json(user)
    })  
}
exports.addMessage=(req,res)=>{
   console.log(req.body.message,"message")
   const msg=[req.body.message]
   User.addMessage(req.body.message)
   .then(message=>{
       res.status("200").json(msg)
   })

}
exports.getMessage=(req,res)=>{
    const id1=req.query.id1
    const id2=req.query.id2
    User.message(id1,id2)
    .then(msg=>{
        if(msg){
            res.status("200").json(msg)
        }
        
    })
}