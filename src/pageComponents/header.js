import React, { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import Hamburger from './Hamburger';
import DropDownRouter from './DropDownRouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigate, useLocation } from "react-router-dom";

function Header() {

  var [openHamburger, setOpenHamburger] = useState(false)
  const toggleHamburger = () => {
    setOpenHamburger(!openHamburger)
  }
  const [position, setPosition] = useState(window.scrollY)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
         let moving = window.scrollY;
         
         setVisible(position > moving);
         setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
  })
  let navigate = useNavigate();
  const cls = visible ? "visible" : "hidden";

  const location = useLocation();
  const path = location.pathname;

  return (
    <div className='App-header' style={{top: visible? "0px" : "-160px"}}>
      <nav className='Header-column'>
        <div className='header-nav'>
          <button className='nav-button' style={{"background-color" :path==="/"? "#cdff7c":"transparent" }} onClick={()=>{navigate('/')}}>
            Home
          </button>
          <button className='nav-button' style={{"background-color" :path==="/explore-plants"? "#cdff7c":"transparent" }} onClick={()=>{navigate('/explore-plants')}}>
            Explore Plants
          </button>
          <button className='nav-button' style={{"background-color" :path==="/gardening-tips"? "#cdff7c":"transparent" }}>
            Garderning Tips
          </button>
          <DropDownRouter />

        </div>
        <div className='navigation-outer' style={{ "display": openHamburger ? "inline" : "none" }}>

          <Sidebar />
        </div>
        <div className="hamburger" onClick={toggleHamburger} >
          {openHamburger ? <FontAwesomeIcon icon={icon({ name: 'xmark' })} /> : <FontAwesomeIcon icon={icon({ name: 'bars' })} />}
        </div>
      </nav>
      <div className="header-logo"></div>
      <nav className='Header-column'>
        <button className='button-sign-up'>
          Sign Up <FontAwesomeIcon icon={icon({ name: 'user-plus' })} />
        </button>
      </nav>
    </div>)
}

export default Header;
