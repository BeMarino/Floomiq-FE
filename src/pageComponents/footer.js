import React from 'react';

function Footer(){
    return (
    <div className='App-footer'>
     <div className='footer-container'>
      <div className='footer-column'>
        <div className='footer-newsletter'>Get our updates</div>
        <div className='footer-newsletter-2'>Get our updates</div>
      </div>
      <div className='footer-column'>
        <div className='footer-row' >
        <input className='email-newsletter' type="email" id="email" name="email"  placeholder="Enter your email" class="email-input"></input>
        <button className='button-newsletter'>
            Stay Tuned
        </button>
        </div>
        
      </div>
    </div>
   </div>)
}

export default Footer;