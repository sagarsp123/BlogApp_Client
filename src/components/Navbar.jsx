import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { AuthContext } from '../context/authContext'
import cx from 'classnames';
import Sidebar from "./Sidebar";
import userLogo from '../assets/userlogo.png'

import {
    Dropdown,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Nav,
    NavItem,
    NavLink
  } from "reactstrap";
  

const Navbar = (props) => {

    const {logout, currentUser} = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    // function toggleSidebar() {
    //     setSidebarOpen(!sidebarOpen);
    // }

    const [toggle1, setToggle] = useState(false);
    const classes = cx(
        'pusher',
        'bottom',
        {'dimmed': toggle}
      );

      function toggleMenu() {
        setToggle(!toggle1);
      }


    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '8px',
        fontSize: '16px',
        cursor: 'pointer'
      };
    
      const menuStyle = {
        backgroundColor: 'white',
        border: '1px solid gray',
        borderRadius: '4px',
        padding: '8px',
        fontSize: '16px'
      };
    
      const itemStyle = {
        backgroundColor: 'lightgray',
        padding: '8px',
        fontSize: '16px'
      };
    
  return (
    
    <div className='navbar'>
      
        <div className='container'>
        {/* <img src={userLogo} height={50}/> */}
        <h3>Welcome {currentUser?.username}</h3>
            
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} alt='' height={100} width={70}/>
                </Link>
            </div>
            <div className='links'>
            <Link to='/'><h4>Home</h4></Link>
                
            <span className='aboutus'>
            <Link className='link' to='/aboutus'><h4>About Us</h4></Link>
            </span>

            <span className='contactus'>
            <Link className='link' to='/contactus'><h4>Contact Us</h4></Link>
            </span>
            
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle style={buttonStyle} caret>
                    Categories
                </DropdownToggle>
                    <DropdownMenu style={menuStyle}>
                        <DropdownItem style={itemStyle} tag="span">
                            <Link className='link' to='/?cat=american'><h4>American</h4></Link>
                            <Link className='link' to='/?cat=indian'><h4>Indian</h4></Link>
                            <Link className='link' to='/?cat=italian'><h4>Italian</h4></Link>
                            <Link className='link' to='/?cat=chinese'><h4>Chinese</h4></Link>
                            <Link className='link' to='/?cat=french'><h4>French</h4></Link>
                            <Link className='link' to='/?cat=mexican'><h4>Mexican</h4></Link>
                        </DropdownItem>
                    </DropdownMenu>
            </Dropdown>
                
                {currentUser ? 
                (
                <span onClick={logout}>Logout</span>
                ) : (
                <h3><Link className='link' to='/login'>Login</Link></h3>
                )}
                <span className='write'>
                    <Link className='link' to='/write'>Write</Link>
                </span>
                </div>
            </div>
        </div>
  )
}

export default Navbar