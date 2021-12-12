const jwt =require("jsonwebtoken")
module.exports=(req,res,next)=>{
    const token=req.get("auth")
    const decodeToken =jwt.verify(token,"aniHadin")
    if(!decodeToken){
       throw res.status("500").send({
            message:"invalid token"

        })
    }
    next();


}