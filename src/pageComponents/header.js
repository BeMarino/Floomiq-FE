import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Hamburger from './Hamburger';
import DropDownRouter from './DropDownRouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Header() {

  var [openHamburger, setOpenHamburger] = useState(false)
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
        <div className='navigation-outer' style={{ "display": openHamburger ? "inline" : "none" }}>
        <Sidebar />
      </div>
        <div className="hamburger" onClick={toggleHamburger} >
        {openHamburger ?<FontAwesomeIcon icon={icon({name:'xmark'})} />:<FontAwesomeIcon icon={icon({name:'bars'})} />}
        </div>
      </nav>
      <nav className='Header-column'>
        <button className='button-sign-up'>
          Sign Up <FontAwesomeIcon icon={icon({name:'user-plus'})}/>
        </button>
      </nav>
    </div>)
}

export default Header;
