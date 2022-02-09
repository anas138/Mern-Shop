import React, { useState, useRef, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from "axios"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import socket from "socket.io-client"
import ScrollToBottom from 'react-scroll-to-bottom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom"
//import { css } from 'emotion';

function ChatBox() {
  const [text, setText] = useState()
  const { id, name } = useParams()
  const [showMessage, setShowMessage] = useState([])
  const io = useRef()
  const messagesEndRef = useRef()
  const navigate=useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8080/getmessage?id1=${JSON.parse(localStorage.getItem("cUser"))[0]._id}&&id2=${id}`)
      .then(res => {
        setShowMessage(res.data)
      })

    // const arr=["ssss"]
    // const t=["fff",...arr]
    // console.log(t)

  }, [])
  useEffect(() => {
    io.current = socket("http://localhost:8080/")
    io.current.on("message", (data) => {
      setShowMessage((prev) => ([...prev, data.message.message]))
      console.log(data, "socketMessage")
    })

  }, [])

  const textChange = (e) => {
    setText(e.target.value)
  }
  const sendMessage = () => {
    console.log(text, id)
    const senderId = JSON.parse(localStorage.getItem("cUser"))[0]._id
    const message = {
      senderId: senderId,
      receiverId: id,
      text: text
    }
    // sockets
    io.current.emit("send", { message: message })


    axios.post("http://localhost:8080/sendMessage", {
      message: message
    })
      .then(res => {
        console.log(res.data)
        setText("")
        const msg = res.data[0]
        setShowMessage([...showMessage, msg])
      })
  }
  console.log(showMessage, "show")
  return (
    <div className="Main-chat-container">
      <div className="chatBoxContainer">
        <div className="chatHeader">
          <div className="chat-box-heading"><span className="chat-heading-icon" onClick={()=>{navigate('/chat')}}><ArrowBackIosNewIcon/></span><span>{name}</span></div>
        </div>
        <ScrollToBottom className="chatWraper" >
          <div>
            {showMessage && showMessage.map(message => {
              return <div className={message.senderId == JSON.parse(localStorage.getItem("cUser"))[0]._id ? "chatC chatC2" : "chatC"} >
                {(message.text)}
              </div>
            })}
          </div>
        </ScrollToBottom>

        <div className="chatInput">
          <textarea type="text area" placeholder="Enter Message" onChange={textChange} value={text} className="text" ></textarea>
          <button onClick={sendMessage} className="sendButton" >Send</button>
        </div>
      </div>
    </div>

  );
}

export default ChatBox;
