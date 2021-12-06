const express=require('express')
const products = require('../Conroller/admin')
const router=express.Router();

router.post("/addProducts",products.addProducts)
router.get("/addProducts",products.getProducts)
router.get("/deleteProduct",products.deleteProducts)

module.exports=router