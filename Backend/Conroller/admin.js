const axios = require("axios")
const Product = require('../Models/Products')
const addProducts = (req, res, next) => {
    const title = req.body;
    console.log(title);
    const product = new Product(req.body.title, req.body.price, req.body.description, req.body.imageUrl)
    product.save()
        .then((data => {
            // console.log(data)
            res.send(data)
        }))
        .catch((err) => {
            console.log(err)
        })
}

const getProducts = (req, res, next) => {
    console.log(req.get('auth'),"auth")
    Product.getAllProducts()
        .then((data) => {
            console.log(data)
            //const d=[data]
            res.send(data)
        })
        .catch((err) => {
            console.log(err,"anas")
        })
}

const deleteProducts = (req, res, next) => {
    console.log(req.query.id, "getId")
    Product.delProduct(req.query.id)
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
        })
}
const updateProduct = (req, res, next) => {
    console.log(req.body, 'data');
    Product.updtProduct(req.body)
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })

}
const getAuth0= (req,res,next)=>{
      const token =req.get("token")
      console.log(token,"token")
      res.send("authenticated")
     axios.get("https://dev-bfhy0ygs.us.auth0.com/userinfo",{
          headers:{authorization:`Bearer ${token}`}
      }).then(res=>{
          console.log(res)
      })
}


module.exports = {
    addProducts: addProducts,
    getProducts: getProducts,
    deleteProducts: deleteProducts,
    updateProduct: updateProduct,
    getAuth0:getAuth0
}