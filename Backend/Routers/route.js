const express = require('express')
const products = require('../Conroller/admin')
const Users = require("../Conroller/userContoller")
const authToken=require("../Conroller/AuthMiddleWare")
const router = express.Router();

router.post("/addProducts",products.addProducts)
router.get("/addProducts",authToken,products.getProducts)
router.get("/deleteProduct",products.deleteProducts)
router.post("/updateproduct",products.updateProduct)
router.post("/signup",Users.handleSignUp)
router.post("/login",Users.singnInHandle)

module.exports=router