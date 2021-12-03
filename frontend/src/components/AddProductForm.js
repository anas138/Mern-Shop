import React, { useRef } from 'react'
import axios from 'axios'
function AddProductForm(props) {
    const title = useRef()
    const price = useRef()
    const description = useRef()
    const imageUrl = useRef()

    const addProduct = (e) => {
        e.preventDefault()
        const data = {
            title: title.current.value,
            price: price.current.value,
            description: description.current.value,
            imageUrl: imageUrl.current.value
        }
        axios.post('http://localhost:8080/addProducts', data)
            .then(res => {
                console.log(res)
            })
    }
    return (
        <form className="addProductForm">
            <input type='text' placeholder="Title" ref={title}></input>
            <input type='text' placeholder="Price" ref={price}></input>
            <input type='text' placeholder="Description" ref={description}></input>
            <input type='text' placeholder="Image Url" ref={imageUrl}></input>
            <button onClick={addProduct}>Add Product</button>
        </form>
    )
}

export default AddProductForm
