import React,{useEffect,useState} from 'react';
import axios from "axios"
import {Link} from "react-router-dom"



function Users() {
  const [user,setUsers] =useState([])
  const [cUser,setCuser] =useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/getUsers")
    .then(res=>{
      console.log(res.data)
      setUsers(res.data)
    })
  },[])

  useEffect(()=>{
    setCuser(JSON.parse(localStorage.getItem("cUser"))[0])
  },[])

  const selectChat=(useId)=>{

  }
  console.log(cUser,"user")
  return  <div className="Main-chat-container">
     <div className="chatBoxContainer">
     <div className="chatHeader"> 
        <span>Chats</span> 
    </div>
    {user&& user.filter(us=>(us._id!==cUser._id)).map(u=>{
      return<div onClick={()=>{selectChat(u._id)}} className="usersContainer">
        <Link to={`/chat/chatbox/${u._id}/${u.name}`} style={{textDecoration:"none",color:"whiteSmoke"}} >{u.name}</Link>
      </div>
    })}
    </div>
  </div>
}

export default Users;

