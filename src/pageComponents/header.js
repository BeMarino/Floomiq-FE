import React from 'react';

function Header(){
    return (
    <div className='App-header'>
        <nav className='Header-column'>
          <button className='nav-button'>
            Explore Plants
          </button>
          <button className='nav-button'>
            Garderning Tips
          </button>
            <select className='nav-select' name='Plant Care'>
                <option value="Plant Care" disabled selected hidden>Plant Care</option>
                <option value="vegetable">Vegetable</option>
                <option value="meat">Meat</option>
            </select>
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