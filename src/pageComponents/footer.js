import React from 'react';
import Links from './Links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import SocialLinks from './SocialsLinks';
import { Link } from 'react-router-dom';


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
              <input className='email-newsletter' type="email" id="emailNews" name="email" placeholder="Enter your email" ></input>
              <button className='button-newsletter'>
                Stay Tuned <FontAwesomeIcon icon={icon({ name: 'newspaper', style: 'regular' })} />
              </button>
            </div>
            <div className='footer-row-policy' >
              By subscribe, you accept our <span><Link to={"/privacy"} >
              Terms of Service
            </Link></span>
            </div>
          </div>
        </div>
        <div className='footer-row'>
          <div className='footer-logo'>

          </div>
          <Links />
        </div>

        <div className='footer-spacer'></div>
        <div className='footer-row'>
          <div className='footer-credit'>
            <div >
              © 2023 Floomiq. All rights reserved
            </div>
            <Link to={"/privacy"} >
              Privacy Policy
            </Link>
            <Link to={"/terms"} >
              Terms of Service
            </Link>
            <div >
              Cookies Settings
            </div>
          </div>
          <SocialLinks/>
        </div>
      </div>

    </div>)
}

export default Footer;