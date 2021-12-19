import React,{useEffect,useState} from 'react'
import axios from "axios"

function Cart() {
    const [cartItems,setCartItems]=useState([])
    useEffect(()=>{
        const token =localStorage.getItem("token")
        axios.get(`http://localhost:8080/displayCartItems?token=${token}`)
        .then(res=>{
            console.log(res)
            setCartItems(res.data);
        })
    },[])
    return (
        <div>
            <h3>Cart</h3>
             {cartItems.length>0&&cartItems.map(item=>{
                 return <div className="cartContainer">
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                    <span>{item.description}</span>
                    <span>{item.quantity}</span>
                    <button>Place Order</button>
                 </div>
             })}
        </div>
    )
}

export default Cart
