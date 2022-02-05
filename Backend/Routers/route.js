const express = require('express')
const products = require('../Conroller/admin')
const Users = require("../Conroller/userContoller")
const authToken=require("../Conroller/AuthMiddleWare")
const verifyAuthToken=require("../Conroller/authToken")
const router = express.Router();

router.post("/addProducts",products.addProducts)
router.get("/addProducts",authToken,products.getProducts)
router.get("/deleteProduct",products.deleteProducts)
router.post("/updateproduct",products.updateProduct)
router.post("/signup",Users.handleSignUp)
router.post("/login",Users.singnInHandle)
router.post("/cart",Users.AddToCart)
router.get("/displayCartItems",Users.getCartItem)
router.get("/auth0",verifyAuthToken,products.getAuth0)
router.get("/getUsers",Users.getUsers)
router.post("/sendMessage",Users.addMessage)
router.get("/getmessage",Users.getMessage)

module.exports=router