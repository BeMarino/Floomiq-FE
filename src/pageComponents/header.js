import React, { useState } from 'react';
import Nav from './Nav';
import Hamburger from './Hamburger';
import Link from 'react-router-dom';
import DropDownRouter from './DropDownRouter';

function Header() {

  const [openHamburger, setOpenHamburger] = useState(false)
  const toggleHamburger = () => {
    setOpenHamburger(!openHamburger)
  }


  return (
    <div className='App-header'>
      <nav className='Header-column'>
        <div className='header-nav'>
          <button className='nav-button'>
            Explore Plants
          </button>
          <button className='nav-button'>
            Garderning Tips
          </button>
          <DropDownRouter/>
          
        </div>
        <div className='navigation-outer' style={{ "display": openHamburger ? "inline" : "none" }} >
        <Nav />
      </div>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger />
        </div>
      </nav>
      
      <nav className='Header-column'></nav>
      <nav className='Header-column'>
        <button className='button-sign-up'>
          Sign Up
        </button>
      </nav>
    </div>)
}

export default Header;
