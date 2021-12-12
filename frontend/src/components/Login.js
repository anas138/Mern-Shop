import axios from 'axios';
import React,{useRef} from 'react'

function Login() {
    const email=useRef()
    const password=useRef()
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log("anas");
        const data={
            email:email.current.value,
            password:password.current.value
        }
        axios.post('http://localhost:8080/login',data)
        .then(res=>{
            console.log(res)
            localStorage.setItem("token",res.data);
        })
        .catch(err=>{
            console.log(err)
        })

    }
    return (
        <div>
             <form >
            <input Type="Email" placeholder="Enter Email" ref={email} ref={email}></input>
            <input Type="Password" placeholder="Enter Password" ref={password} ref={password}></input>
            <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login