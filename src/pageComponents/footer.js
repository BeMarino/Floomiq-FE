import React from 'react';

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
              <input className='email-newsletter' type="email" id="email" name="email" placeholder="Enter your email" class="email-input"></input>
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
          <div className='footer-column'>
            logo
          </div>
          <div className='footer-column-links'>
            <div className='footer-column-link'>Col1
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
            </div>
            <div className='footer-column-link'>Col2
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
            </div>
            <div className='footer-column-link'>Col3
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
            </div>
            <div className='footer-column-link'>Col4
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
            </div>
            <div className='footer-column-link'>Col5
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
              <div className='footer-column-link-2'>Link1</div>
            </div>
          </div>
        </div>
        <div className='footer-spacer'></div>
      </div>
    </div>)
}

export default Footer;