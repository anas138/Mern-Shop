import React, { useState, useEffect,useRef } from 'react'
import ApiHandler from './Utils/apiHandler'
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import axios from "axios"
function Admin() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const apiHandler = new ApiHandler()
    const [products, getProducts] = useState([])
    const[flag,setFlag]=useState(false)
    useEffect(() => {
        apiHandler.getAllProducts()
            .then(data => {
                getProducts(data)
                setFlag(false)
            })
    },[flag])
    const editHandler=(e)=>{
       console.log(e.target.value);
       const data=products.filter((product)=>
           product._id == e.target.value)
           console.log(data)
           dispatch({
               type:"get singlr product",
               payload:data
           })
           navigate("/products")
    }
    const deleteHandler=(e)=>{
        apiHandler.deleteHandler(e)
        .then(res=>{
            console.log(res)
            setFlag(true)
        })
    }
    return (
        <div className="cardContainer">
            {products[0] != null ? products.map((product) => {
                return <div className="card" key={product._id}>
                    <h5>{product.title}</h5>
                    <img src="logo192.png" width="100%" height="100" /> <br />
                    <span>$ {product.price}</span>
                    <p>{product.description}</p>
                    <Button variant="contained" margin="normal" onClick={editHandler} value={product._id}>Edit</Button>
                    <Button variant="contained" margin="normal" onClick={deleteHandler} value={product._id}>Delete</Button>
                </div>
            }) : ''}
        </div>
    )
}

export default Admin