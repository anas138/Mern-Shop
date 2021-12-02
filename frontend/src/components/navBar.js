import react from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=>{
    return(
        
            <ul className='navBar'>
                <li>Shop</li>
                <li><Link to='/products' style={{ textDecoration: 'none' }}>Add Products</Link></li>
                <li>Cart</li>
                <li>Admin</li>
            </ul>
        
    )
}
export default NavBar