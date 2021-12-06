const Product=require('../Models/Products')
const addProducts=(req,res,next)=>{
    const title=req.body;
    console.log(title);
    const product=new Product(req.body.title,req.body.price,req.body.description,req.body.imageUrl)
    product.save()
    .then((data=>{
       // console.log(data)
        res.send(data)
    }))
    .catch((err)=>{
        console.log(err)
    })
}

const getProducts=(req,res,next)=>{
   Product.getAllProducts()
   .then((data)=>{
       console.log(data)
       //const d=[data]
       res.send(data)
   })
   .catch((err)=>{
       console.log(err)
   })
}

const deleteProducts=(req,res,next)=>{
    console.log(req.query.id,"getId")
   Product.delProduct(req.query.id)
   .then(data=>{
       console.log(data)
       res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}


module.exports={
    addProducts:addProducts,
    getProducts:getProducts,
    deleteProducts:deleteProducts
}