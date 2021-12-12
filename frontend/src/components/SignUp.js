import React,{useRef} from 'react'
import axios from 'axios'

function SignUp() {
    const name=useRef();
    const email=useRef()
    const password=useRef()
    const handleSingnUp=(e)=>{
        e.preventDefault()
        console.log("anas")
        const data={
            name:name.current.value,
            email:email.current.value,
            password:password.current.value
        }
        axios.post("http://localhost:8080/signup",data)
        .then(res=>{
            console.log(res);
        })

    }
    return (
        <div>
            <form >
            <input Type="text" placeholder="Enter Name" ref={name}></input>
            <input Type="Email" placeholder="Enter Email" ref={email}></input>
            <input Type="Password" placeholder="Enter Password" ref={password}></input>
            <button onClick={handleSingnUp}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
