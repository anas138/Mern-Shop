import React, { useRef,useEffect } from 'react'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Products from './Products';
function AddProductForm(props) {
    const product=useSelector((state)=>state.singleProduct)
    const navigate=useNavigate()
    const title = useRef()
    const price = useRef()
    const description = useRef()
    const imageUrl = useRef()
   useEffect(()=>{
       if(product.length){
        title.current.value=product[0].title;
        price.current.value=product[0].price;
        description.current.value=product[0].description;
        imageUrl.current.value=product[0].imageUrl      
       }
   },[])
    const addProduct = (e) => {
        e.preventDefault()
        const data = {
            title: title.current.value,
            price: price.current.value,
            description: description.current.value,
            imageUrl: imageUrl.current.value
        }
        console.log(data);
        axios.post('http://localhost:8080/addProducts', data)
            .then(res => {
                console.log(res)
                navigate("/shop")
            })
    }
    return (
        <form className="addProductForm">
            <h2>Add Products</h2>
            <TextField id="outlined-basic" label="Title" variant="outlined" margin="normal" inputRef={title}></TextField>
            <TextField id="outlined-basic" label="Price" variant="outlined" margin="normal" inputRef={price}></TextField>
            <TextField id="outlined-basic" label="Description" variant="outlined" margin="normal" inputRef={description} multiline
                maxRows={4}></TextField>
            <TextField id="outlined-basic" label="Image Url" variant="outlined" margin="normal" inputRef={imageUrl}></TextField>
            {product.length?<Button  variant="contained" margin="5px">Update Product</Button>:<Button onClick={addProduct} variant="contained" margin="5px">Add Product</Button>}
        </form>
    )
}

export default AddProductForm
