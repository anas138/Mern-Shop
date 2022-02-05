import axios from 'axios';
import React,{useRef} from 'react'
import {useDispatch } from "react-redux"
import { useNavigate} from "react-router-dom"
import jwt from 'jsonwebtoken'

function Login() {
    const navigate=useNavigate()
    const dispatch = useDispatch()
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
            console.log(res.data.res,"log")
            dispatch({
                type:"set Current User",
                payload:res.data.res
            })
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("cUser",JSON.stringify(res.data.res));
            const t=localStorage.getItem("token");
            const v=jwt.verify(t,'aniHadin')
            console.log(v,'verify');
            dispatch({
                type:"setToken",
                payload:localStorage.getItem("token")
            })
            const verify = jwt.verify(localStorage.getItem("token"),"aniHadin")
            if(verify.email=="admin@gmail.com"){
                dispatch({
                    type:"checkAdmin",
                    payload:"admin"
                })
            }
            navigate('/shop')
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
