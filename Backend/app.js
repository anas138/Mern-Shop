const express = require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const router=require('./Routers/route')
const dbConnect=require('./utils/dbConnection').dbConnect

// Middleware
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())
app.use(router);

dbConnect()
app.listen(8080, () => {
    console.log("listen")
})