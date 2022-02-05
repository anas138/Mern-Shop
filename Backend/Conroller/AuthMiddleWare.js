const jwt =require("jsonwebtoken")
module.exports=async(req,res,next)=>{
    
    const token=req.get("auth")
    const decodeToken = await jwt.verify(token,"aniHadin")
    console.log(decodeToken,"token")
    if(!decodeToken){
        
        console.log('anas')
        const error=new Error("not authenticated");
        error.status="401"
        res.status(error.status)
        
    }
    
    next();
}