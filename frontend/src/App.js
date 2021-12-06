import React from 'react'
import NavBar from './components/navBar'
import Products from './components/Products'
import Shop from './components/Shop'
import Admin from "./components/Admin"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
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
    </Router>
  );
}

export default App;
