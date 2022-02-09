import React,{useEffect,useState} from 'react'
import NavBar from './components/navBar'
import Products from './components/Products'
import Shop from './components/Shop'
import Admin from "./components/Admin"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Cart from './components/Cart'
import Three from './components/Three'
import HomePage from "./components/homePage"
import { useSelector} from "react-redux"
import Practice from './components/Practice'
import Canvas from "./components/Canvas"
import Chat from "./components/Chat/Chat.js"
import ChatBox from "./components/Chat/ChatBox"
import './App.css';
function App() {
  const t=useSelector(state=>(state.token))
  const isAdmin=useSelector((state)=>(state.isAdmin))
  useEffect(()=>{
   // setT(localStorage.getItem("token"));
  },[])
  return (
    <Router>
      <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      
      { isAdmin=="admin"&&
      <Route path="/products" element={<Products/>}/>
      }
      
        <Route path="/shop" element={<Shop/>}/>
      

     { isAdmin=="admin"&& 
        <Route path="/admin" element={<Admin/>}/>
      }
      
        <Route path="/signup" element={<SignUp/>}/>
    
     { !t&&("token")&& 
        <Route path="/login" element={<Login/>}/>
      }
      
        <Route path="/cart" element={<Cart/>}/>
      
      
        <Route path="/three" element={<Three/>}/>
      
    
      
        <Route path='/prac' element={<Practice/>}/>
      
      
        <Route path="/canvas" element={<Canvas/>}/>
  
      
        <Route path="/chat"  element={<Chat/>}/>
      
      
        <Route path="/chat/chatBox/:id/:name" element={<ChatBox/>}/>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
