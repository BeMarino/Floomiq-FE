import React from 'react';
import Links from './Links';


function Footer() {
  return (
    <div className='App-footer'>
      <div className='footer-container'>
        <div className='footer-row'>
          <div className='footer-column-updates'>
            <div className='footer-newsletter'>Get our updates</div>
            <div className='footer-newsletter-2'>Get our updates</div>
          </div>
          <div className='footer-column'>
            <div className='footer-row-email' >
              <input className='email-newsletter' type="email" id="email" name="email" placeholder="Enter your email" ></input>
              <button className='button-newsletter'>
                Stay Tuned
              </button>
            </div>
            <div className='footer-row-policy' >
              By subscribe, you accept our Privacy Policy
            </div>
          </div>
        </div>
        <div className='footer-row'>
          <div className='footer-logo'>
            logo
          </div>
          <Links />
        </div>

        <div className='footer-spacer'></div>
        <div className='footer-row'>
          <div >
            <i mdi-copyright="true"></i>
          </div>
        </div>

      </div>

    </div>)
}

export default Footer;