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
import './App.css';
function App() {
  const t=useSelector(state=>(state.token))
  const isAdmin=useSelector((state)=>(state.isAdmin))
  useEffect(()=>{
   // setT(localStorage.getItem("token"));
    
  },[])
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      { isAdmin=="admin"&&<Routes>
      <Route path="/products" element={<Products/>}/>
      </Routes>}
      <Routes>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>

     { isAdmin=="admin"&& <Routes>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>}
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
     { !t&&("token")&& <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>}
      <Routes>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Routes>
        <Route path="/three" element={<Three/>}/>
      </Routes>
      {/* <Routes>
        <Route  path="*" exact={true} element={<div>page not found</div>}/>
      </Routes> */}
    </Router>
    
  );
}

export default App;
