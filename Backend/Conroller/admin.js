
const getProducts=(req,res,next)=>{
    const title=req.body;
    console.log(title);
    res.send('success')
}



module.exports={
    getProducts:getProducts
}