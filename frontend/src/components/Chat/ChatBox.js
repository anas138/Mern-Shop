import React,{useState,useRef,useEffect} from 'react';
import {useParams} from "react-router-dom"
import axios from "axios"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import socket from "socket.io-client"


function ChatBox() {
  const [text,setText] = useState()
  const {id} =useParams()
  const [showMessage,setShowMessage] = useState([])
  const io=useRef()
  const messagesEndRef = useRef()
  
  useEffect(()=>{
    axios.get(`http://localhost:8080/getmessage?id1=${JSON.parse(localStorage.getItem("cUser"))[0]._id}&&id2=${id}`)
    .then(res=>{
      setShowMessage(res.data)
    })

    const arr=["ssss"]
    const t=["fff",...arr]
    console.log(t)
    io.current = socket("http://localhost:8080/")
  },[])
  useEffect(()=>{
      io.current.on("message",(data)=>{
        setShowMessage((prev)=>([...prev,data.message.message]))
        console.log(data,"socketMessage")
      })
      
  },[])

 const textChange=(e)=>{
   setText(e.target.value)
 }
 const sendMessage=()=>{
   console.log(text,id)
   const senderId=JSON.parse(localStorage.getItem("cUser"))[0]._id
   const message={
    senderId:senderId,
    receiverId:id,
    text:text
   }
   // sockets
   io.current.emit("send",{message:message})


   axios.post("http://localhost:8080/sendMessage",{
     message : message
    })
   .then(res=>{
     console.log(res.data)
     setText("")
    const msg=res.data[0]
    setShowMessage([...showMessage,msg])
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
   })
  }
  console.log(showMessage,"show")
  return (
  <div className="chatBoxContainer">
    
     
       <div className="chatWraper" ref={messagesEndRef.current}>
        {showMessage && showMessage.map(message=>{
         return <div className={message.senderId==JSON.parse(localStorage.getItem("cUser"))[0]._id?"chatC chatC2":"chatC"} >
             {(message.text)}
           </div>
        })}
        </div>
      
    <div className="chatInput">
      <textarea type="text area" placeholder="Enter Message"onChange={textChange} value={text} className="text" ></textarea>
      <button onClick={sendMessage} className="sendButton" >Send</button>
      </div>
  </div>
  );
}

export default ChatBox;
