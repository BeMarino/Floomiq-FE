import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Hamburger from './Hamburger';
import DropDownRouter from './DropDownRouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigate, useLocation, Link } from "react-router-dom";
function Header() {

  var [openHamburger, setOpenHamburger] = useState(false)
  const toggleHamburger = () => {
    setOpenHamburger(!openHamburger)
  }
  const [position, setPosition] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving)
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  })
  let navigate = useNavigate();
  const cls = visible ? "visible" : "hidden";

  const location = useLocation();
  const path = location.pathname;

  if(path !== "/login")
  return (
    <div className='App-header' style={{ top: visible ? "0px" : "-160px" }}>
      <Link to="/" className="header-logo">
        <svg width="160" height="36" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.7029 29.6503L17.7029 29.6503C16.1869 29.9816 13.7618 30.4771 11.6306 28.956C10.4548 28.1167 8.53513 26.2173 6.61065 24.1399C4.741 22.1216 2.9422 20.0181 1.94687 18.7439C1.51049 17.8933 1.01225 16.6164 1.00022 15.3345C0.988502 14.0854 1.42873 12.814 2.99761 11.8347L18.9245 2.12439C20.2065 1.37161 21.7802 0.84447 23.1663 1.04174C24.4392 1.22289 25.7705 2.04522 26.6232 4.50859C27.6491 7.47228 28.651 10.5308 29.4349 13.193C30.2254 15.8779 30.7733 18.0915 30.9212 19.3984C30.9245 19.4273 30.9291 19.4561 30.9349 19.4847C31.2488 21.0326 30.4335 23.1763 27.9345 24.5662C26.5409 25.3413 24.3538 26.5383 22.3083 27.5859C21.2849 28.1101 20.3055 28.5925 19.4828 28.9647C18.6321 29.3497 18.03 29.5788 17.7242 29.6456L17.7029 29.6503Z" stroke="white" stroke-width="2" stroke-linejoin="round" />
          <path d="M53.42 10.46C53.54 10.46 53.636 10.508 53.708 10.604C53.804 10.676 53.852 10.772 53.852 10.892V14.312C53.852 14.432 53.804 14.54 53.708 14.636C53.636 14.708 53.54 14.744 53.42 14.744H49.928C49.808 14.744 49.748 14.804 49.748 14.924V28.568C49.748 28.688 49.7 28.796 49.604 28.892C49.532 28.964 49.436 29 49.316 29H45.104C44.984 29 44.876 28.964 44.78 28.892C44.708 28.796 44.672 28.688 44.672 28.568V14.924C44.672 14.804 44.612 14.744 44.492 14.744H42.368C42.248 14.744 42.14 14.708 42.044 14.636C41.972 14.54 41.936 14.432 41.936 14.312V10.892C41.936 10.772 41.972 10.676 42.044 10.604C42.14 10.508 42.248 10.46 42.368 10.46H44.492C44.612 10.46 44.672 10.4 44.672 10.28V9.488C44.672 8 44.9 6.848 45.356 6.032C45.812 5.192 46.544 4.604 47.552 4.268C48.584 3.908 50 3.752 51.8 3.8H53.168C53.288 3.8 53.384 3.848 53.456 3.944C53.552 4.016 53.6 4.112 53.6 4.232V7.148C53.6 7.268 53.552 7.376 53.456 7.472C53.384 7.544 53.288 7.58 53.168 7.58H51.98C51.14 7.604 50.552 7.784 50.216 8.12C49.904 8.432 49.748 9.02 49.748 9.884V10.28C49.748 10.4 49.808 10.46 49.928 10.46H53.42ZM56.8659 29C56.7459 29 56.6379 28.964 56.5419 28.892C56.4699 28.796 56.4339 28.688 56.4339 28.568V4.232C56.4339 4.112 56.4699 4.016 56.5419 3.944C56.6379 3.848 56.7459 3.8 56.8659 3.8H61.0779C61.1979 3.8 61.2939 3.848 61.3659 3.944C61.4619 4.016 61.5099 4.112 61.5099 4.232V28.568C61.5099 28.688 61.4619 28.796 61.3659 28.892C61.2939 28.964 61.1979 29 61.0779 29H56.8659ZM73.0349 29.288C71.0189 29.288 69.2909 28.76 67.8509 27.704C66.4109 26.648 65.4269 25.208 64.8989 23.384C64.5629 22.256 64.3949 21.032 64.3949 19.712C64.3949 18.296 64.5629 17.024 64.8989 15.896C65.4509 14.12 66.4469 12.728 67.8869 11.72C69.3269 10.712 71.0549 10.208 73.0709 10.208C75.0389 10.208 76.7189 10.712 78.1109 11.72C79.5029 12.704 80.4869 14.084 81.0629 15.86C81.4469 17.06 81.6389 18.32 81.6389 19.64C81.6389 20.936 81.4709 22.148 81.1349 23.276C80.6069 25.148 79.6229 26.624 78.1829 27.704C76.7669 28.76 75.0509 29.288 73.0349 29.288ZM73.0349 24.932C73.8269 24.932 74.4989 24.692 75.0509 24.212C75.6029 23.732 75.9989 23.072 76.2389 22.232C76.4309 21.464 76.5269 20.624 76.5269 19.712C76.5269 18.704 76.4309 17.852 76.2389 17.156C75.9749 16.34 75.5669 15.704 75.0149 15.248C74.4629 14.792 73.7909 14.564 72.9989 14.564C72.1829 14.564 71.4989 14.792 70.9469 15.248C70.4189 15.704 70.0349 16.34 69.7949 17.156C69.6029 17.732 69.5069 18.584 69.5069 19.712C69.5069 20.792 69.5909 21.632 69.7589 22.232C69.9989 23.072 70.3949 23.732 70.9469 24.212C71.5229 24.692 72.2189 24.932 73.0349 24.932ZM92.714 29.288C90.698 29.288 88.97 28.76 87.53 27.704C86.09 26.648 85.106 25.208 84.578 23.384C84.242 22.256 84.074 21.032 84.074 19.712C84.074 18.296 84.242 17.024 84.578 15.896C85.13 14.12 86.126 12.728 87.566 11.72C89.006 10.712 90.734 10.208 92.75 10.208C94.718 10.208 96.398 10.712 97.79 11.72C99.182 12.704 100.166 14.084 100.742 15.86C101.126 17.06 101.318 18.32 101.318 19.64C101.318 20.936 101.15 22.148 100.814 23.276C100.286 25.148 99.302 26.624 97.862 27.704C96.446 28.76 94.73 29.288 92.714 29.288ZM92.714 24.932C93.506 24.932 94.178 24.692 94.73 24.212C95.282 23.732 95.678 23.072 95.918 22.232C96.11 21.464 96.206 20.624 96.206 19.712C96.206 18.704 96.11 17.852 95.918 17.156C95.654 16.34 95.246 15.704 94.694 15.248C94.142 14.792 93.47 14.564 92.678 14.564C91.862 14.564 91.178 14.792 90.626 15.248C90.098 15.704 89.714 16.34 89.474 17.156C89.282 17.732 89.186 18.584 89.186 19.712C89.186 20.792 89.27 21.632 89.438 22.232C89.678 23.072 90.074 23.732 90.626 24.212C91.202 24.692 91.898 24.932 92.714 24.932ZM124.741 10.208C126.613 10.208 128.077 10.772 129.133 11.9C130.189 13.028 130.717 14.612 130.717 16.652V28.568C130.717 28.688 130.669 28.796 130.573 28.892C130.501 28.964 130.405 29 130.285 29H126.073C125.953 29 125.845 28.964 125.749 28.892C125.677 28.796 125.641 28.688 125.641 28.568V17.768C125.641 16.784 125.389 16.004 124.885 15.428C124.381 14.852 123.709 14.564 122.869 14.564C122.029 14.564 121.345 14.852 120.817 15.428C120.289 16.004 120.025 16.772 120.025 17.732V28.568C120.025 28.688 119.977 28.796 119.881 28.892C119.809 28.964 119.713 29 119.593 29H115.417C115.297 29 115.189 28.964 115.093 28.892C115.021 28.796 114.985 28.688 114.985 28.568V17.768C114.985 16.808 114.721 16.04 114.193 15.464C113.665 14.864 112.981 14.564 112.141 14.564C111.373 14.564 110.725 14.792 110.197 15.248C109.693 15.704 109.393 16.34 109.297 17.156V28.568C109.297 28.688 109.249 28.796 109.153 28.892C109.081 28.964 108.985 29 108.865 29H104.653C104.533 29 104.425 28.964 104.329 28.892C104.257 28.796 104.221 28.688 104.221 28.568V10.928C104.221 10.808 104.257 10.712 104.329 10.64C104.425 10.544 104.533 10.496 104.653 10.496H108.865C108.985 10.496 109.081 10.544 109.153 10.64C109.249 10.712 109.297 10.808 109.297 10.928V12.332C109.297 12.404 109.321 12.452 109.369 12.476C109.417 12.5 109.465 12.476 109.513 12.404C110.497 10.94 112.021 10.208 114.085 10.208C115.285 10.208 116.329 10.46 117.217 10.964C118.129 11.468 118.825 12.188 119.305 13.124C119.377 13.268 119.461 13.268 119.557 13.124C120.085 12.14 120.793 11.408 121.681 10.928C122.593 10.448 123.613 10.208 124.741 10.208ZM136.656 8.408C135.84 8.408 135.156 8.144 134.604 7.616C134.076 7.064 133.812 6.38 133.812 5.564C133.812 4.724 134.076 4.04 134.604 3.512C135.132 2.984 135.816 2.72 136.656 2.72C137.496 2.72 138.18 2.984 138.708 3.512C139.236 4.04 139.5 4.724 139.5 5.564C139.5 6.38 139.224 7.064 138.672 7.616C138.144 8.144 137.472 8.408 136.656 8.408ZM134.496 29C134.376 29 134.268 28.964 134.172 28.892C134.1 28.796 134.064 28.688 134.064 28.568V10.892C134.064 10.772 134.1 10.676 134.172 10.604C134.268 10.508 134.376 10.46 134.496 10.46H138.708C138.828 10.46 138.924 10.508 138.996 10.604C139.092 10.676 139.14 10.772 139.14 10.892V28.568C139.14 28.688 139.092 28.796 138.996 28.892C138.924 28.964 138.828 29 138.708 29H134.496ZM154.219 10.928C154.219 10.808 154.255 10.712 154.327 10.64C154.423 10.544 154.531 10.496 154.651 10.496H158.863C158.983 10.496 159.079 10.544 159.151 10.64C159.247 10.712 159.295 10.808 159.295 10.928V35.264C159.295 35.384 159.247 35.48 159.151 35.552C159.079 35.648 158.983 35.696 158.863 35.696H154.651C154.531 35.696 154.423 35.648 154.327 35.552C154.255 35.48 154.219 35.384 154.219 35.264V27.56C154.219 27.488 154.195 27.44 154.147 27.416C154.099 27.392 154.051 27.416 154.003 27.488C153.043 28.688 151.699 29.288 149.971 29.288C148.219 29.288 146.743 28.844 145.543 27.956C144.367 27.044 143.503 25.82 142.951 24.284C142.519 23.012 142.303 21.512 142.303 19.784C142.303 18.152 142.507 16.712 142.915 15.464C143.443 13.808 144.307 12.524 145.507 11.612C146.731 10.676 148.183 10.208 149.863 10.208C151.615 10.208 152.995 10.868 154.003 12.188C154.051 12.236 154.099 12.26 154.147 12.26C154.195 12.236 154.219 12.188 154.219 12.116V10.928ZM153.391 23.492C153.919 22.604 154.183 21.356 154.183 19.748C154.183 18.212 153.943 17 153.463 16.112C152.863 15.08 152.023 14.564 150.943 14.564C149.767 14.564 148.879 15.08 148.279 16.112C147.775 17.072 147.523 18.272 147.523 19.712C147.523 21.32 147.823 22.592 148.423 23.528C149.023 24.464 149.875 24.932 150.979 24.932C152.035 24.932 152.839 24.452 153.391 23.492Z" fill="white" />
        </svg>


      </Link>
      <div class="navbar-end">
        <div className='header-nav'>
          <button className='nav-button' style={{ "color": path === "/explore-plants" ? "#cdff7c" : "#c6c4c4" }} onClick={() => { navigate('/explore-plants') }}>
            Elenco Piante
          </button>
          <button className='nav-button' style={{ "color": path === "/" ? "#cdff7c" : "#c6c4c4" }} onClick={() => { navigate('/') }}>
            Chi Siamo
          </button>
          <button className='nav-button' style={{ "color": path === "/gardening-tips" ? "#cdff7c" : "#c6c4c4" }}>
            Contatti
          </button>
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-primary button-sign-up" id="navbar-sign-up">
                <strong>Sign up</strong>
              </button>
              <Link to="/login" class="button is-light button-sign-up">
                Log in
              </Link>
            </div>
          </div>
        </div>
        <div className='navigation-outer' style={{ "display": openHamburger ? "inline" : "none" }}>

          <Sidebar />
        </div>
        <div className="hamburger" onClick={toggleHamburger} >
          {openHamburger ? <FontAwesomeIcon icon={icon({ name: 'xmark' })} /> : <FontAwesomeIcon icon={icon({ name: 'bars' })} />}
        </div>
      </div>
    </div>)
}

export default Header;