import React from 'react'
import NavBar from './components/navBar'
import Products from './components/Products'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import './App.css';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/products" element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
