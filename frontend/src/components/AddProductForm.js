import React, { useRef } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function AddProductForm(props) {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const title = useRef()
    const price = useRef()
    const description = useRef()
    const imageUrl = useRef()
    const flag=false
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
            <Button onClick={addProduct} variant="contained" margin="5px">Add Product</Button>
        </form>
    )
}

export default AddProductForm
