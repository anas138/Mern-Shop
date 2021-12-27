import  React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"

const NavBar = () => {

    const [token,setToken]=useState()
    const dispatch=useDispatch()
    const getToken=useSelector((state)=>(state.token))
    
    const handleLogot=()=>{
         setToken(localStorage.removeItem("token"))
         dispatch({
             type:"setToken"
         })   

    }
    useEffect(()=>{
        dispatch({
            type:"setToken"
        }) 
    },[])
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                           <Link style={{textDecoration:'none',color:"white"}} to="/shop">Shop</Link> 
                        </Typography>
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                            <Link to='/products' style={{ textDecoration: 'none',color:"white" }}>Add Products</Link>
                        </Typography>
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                            <Link to="/cart" style={{ textDecoration: 'none',color:"white" }}>Cart</Link>
                        </Typography>
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                        <Link to="/admin" style={{ textDecoration: 'none',color:"white" }}>Admin</Link>
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