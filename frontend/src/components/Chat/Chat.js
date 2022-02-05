import React,{useEffect} from 'react';
import socket from "socket.io-client"
import Users from "./users"
import ChatBox from "./ChatBox"

function Chat() {
    useEffect(()=>{
         var sock = socket("http://localhost:8080/")
         sock.on("message",(data)=>{
           console.log(data.message);
         })
         sock.emit("send",{message:"sent to backend"})
         console.log("chat")
        

    },[])
  return <div className="chatContainer">
      <div className="users">  
         <Users/>
      </div>
      
  </div>;
}

export default Chat;
