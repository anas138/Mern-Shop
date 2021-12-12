import React from 'react'
import NavBar from './components/navBar'
import Products from './components/Products'
import Shop from './components/Shop'
import Admin from "./components/Admin"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import './App.css';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/products" element={<Products/>}/>
      </Routes>
      <Routes>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>

      <Routes>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
