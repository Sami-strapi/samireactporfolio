import React from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className='navbar'>
            <ul className='navbar-ul'>
                <li className='navbar-li'><NavLink className='nav-link '  to="/" >Home</NavLink></li>
                <li className='navbar-li'><NavLink className='nav-link ' to="/Services">Services</NavLink></li>
                <li className='navbar-li'><NavLink className='nav-link ' to="/Blog">Blog</NavLink></li>
                <li className='navbar-li'><NavLink className='nav-link ' to="/Contact">Contact Us</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar