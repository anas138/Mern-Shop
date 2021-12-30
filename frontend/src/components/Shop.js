import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import ApiHandler from "./Utils/apiHandler"
import axios from 'axios'

function Shop() {
    const apiHandler=new ApiHandler()
    const [products, getProducts] = useState([])

    useEffect(() => {
        apiHandler.getAllProducts()
        .then((res=>{
            console.log(res)
            getProducts(res)
           

        }))
        .catch(err=>{
            console.log(err)
            alert("please sign in to make your shop")
        })
        
    }, [])

   const addToCart=(id)=>{
        const data={
            productId:id,
            quantity:1,
            user:localStorage.getItem("token")
        }
        console.log(data);
        axios.post("http://localhost:8080/cart",data)
        .then(res=>{
            console.log(res)
        })
    }
    return (
        <div className="cardContainer">
            {products[0] !=null ? products.map((product) => {
                return <div className="card" key={product._id}>
                    <h5>{product.title}</h5>
                    <img src="logo192.png" width="100%" height="100" /> <br />
                    <span>$ {product.price}</span>
                    <p>{product.description}</p>
                    <Button variant="contained" margin="5px" fullWidth={true} onClick={()=>{addToCart(product._id)}}>Add to Cart</Button>
                </div>
            }):''}
        </div>
    )
}

export default Shop
