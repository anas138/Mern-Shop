const express = require('express')
const router=require('./Routers/route')
const app = express()

app.use(router);

app.listen(8080, () => {
    console.log("listen")
})