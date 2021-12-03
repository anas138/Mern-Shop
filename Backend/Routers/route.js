const express=require('express')
const getProducts = require('../Conroller/admin')
const router=express.Router();

router.post("/addProducts",getProducts.getProducts)

module.exports=router