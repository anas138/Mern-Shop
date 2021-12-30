import  React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import jwt from "jsonwebtoken"

const NavBar = () => {

    const [token,setToken]=useState()
    const dispatch=useDispatch()
    const getToken=useSelector((state)=>(state.token))
    const token1=useSelector((state)=>(state.isAdmin))
    const [flag,setFlag] = useState(false)
    
    
    useEffect(()=>{
        
        const t=localStorage.getItem("token")
        if(t){
        const verify= jwt.verify(t,"aniHadin");
         if(verify.email=="admin@gmail.com"){
              setToken("admin");
              dispatch({
                  type:"checkAdmin",
                  payload:"admin"
              })
         }
         else{
            dispatch({
                type:"checkAdmin",
                payload:""
            })  
         }
        }
    },[flag])
    useEffect(()=>{
        dispatch({
            type:"setToken"
        }) 
    },[])
    const handleLogot=()=>{
        setToken(localStorage.removeItem("token"))
        dispatch({
            type:"setToken"
        })
        dispatch({
            type:"checkAdmin",
            payload:""
        })  

   }
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                           <Link style={{textDecoration:'none',color:"white"}} to="/shop">Shop</Link> 
                        </Typography>
                        { token1=="admin"&&<Typography variant="h7" color="inherit" component="div" padding="20px">
                            <Link to='/products' style={{ textDecoration: 'none',color:"white" }} onClick={()=>{
                                setFlag(flag => (!flag))
                            }}>Add Products</Link>
                        </Typography>}
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                            <Link to="/cart" style={{ textDecoration: 'none',color:"white" }}>Cart</Link>
                        </Typography>
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                        { token1=="admin"&&<Link to="/admin" style={{ textDecoration: 'none',color:"white" }} onClick={()=>{
                            setFlag(flag => (!flag))
                        }}>Admin</Link>}
                        </Typography>
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                        <Link to="/signup" style={{ textDecoration: 'none',color:"white" }}>Sign up</Link>
                        </Typography>
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                       {getToken? <Link to="" style={{ textDecoration: 'none',color:"white" }} onClick={handleLogot}>Logout</Link>: <Link to="/login" style={{ textDecoration: 'none',color:"white" }}>Login</Link>}
                        </Typography>
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                        <Link to="/three" style={{ textDecoration: 'none',color:"white" }}>Three js</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>

    )
}
export default NavBar