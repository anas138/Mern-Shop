const express=require('express')
const getProducts = require('../Conroller/admin')
const router=express.Router();

router.get("/",getProducts.getProducts)

module.exports=router