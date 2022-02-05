const express = require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const router=require('./Routers/route')
const dbConnect=require('./utils/dbConnection').dbConnect
let io;
let sockData

// Middleware
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())
app.use(router);

dbConnect((client)=>{
    //console.log(client)
    const server=app.listen(8080, () => {
        console.log("listen")

    })
     io = require("socket.io")(server,{
        cors: {
            origin: "http://localhost:3000"
            
          }
    })
    io.on("connection",(socket)=>{
        console.log(socket.id,"no of sockets")

        console.log("socket connected")
         socket.on("send",(data)=>{
            socket.broadcast.emit("message",{message:data})
        })
        
        
    })

})
