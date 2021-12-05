import React from 'react'
import NavBar from './components/navBar'
import Products from './components/Products'
import Shop from './components/Shop'
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
    </Router>
  );
}

export default App;
