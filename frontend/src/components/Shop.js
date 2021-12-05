import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Button from '@mui/material/Button';
import axios from 'axios'

function Shop() {
    const [products, getProducts] = useState([ ])
    const flag=useSelector((state)=>state.flag)
    useEffect(() => {
        console.log(products)
        axios.get("http://localhost:8080/addProducts")
            .then(res => {
                console.log(res.data)
                getProducts(res.data)
            })
    }, [flag])
    return (
        <div className="cardContainer">
            {products[0] !=null ? products.map((product) => {
                return <div className="card" key={product._id}>
                    <h5>{product.title}</h5>
                    <img src="logo192.png" width="100%" height="100" /> <br />
                    <span>$ {product.price}</span>
                    <p>{product.description}</p>
                    <Button variant="contained" margin="5px" fullWidth={true}>Add to Cart</Button>
                </div>
            }):''}
        </div>
    )
}

export default Shop
