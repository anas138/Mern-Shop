import react from 'react'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
const NavBar = () => {
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
                            Cart
                        </Typography>
                        <Typography variant="h7" color="inherit" component="div" padding="20px">
                            Admin
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>

    )
}
export default NavBar