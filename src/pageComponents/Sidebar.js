import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa"
import { FaInfo } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6";
import SocialLinks from "./SocialsLinks";
import { GiPlantWatering } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";




export default function Sidebar(props) {
    var [openHamburger, setOpenHamburger] = useState(false)
  const toggleHamburger = () => {
    setOpenHamburger(!openHamburger)
  }
    let navigate = useNavigate();
    return (

        <div>
            <div className="sidebar"  >
                <div className="sidebar-logo"></div>
                <ul>
                    <li><Link to={"/"} style={{color: 'black'}}><div className="sidebar__listItem"><FaHome className="sidebar__icon" /><span >Home</span></div></Link></li>
                    <li><Link to={"/explore-plants"} style={{color: 'black'}}><div className="sidebar__listItem"><FaSearch className="sidebar__icon" /><span>Explore Plants</span></div></Link></li>
                    <li><div className="sidebar__listItem"><GiPlantWatering className="sidebar__icon" /><span>Gardening Tips</span></div></li>
                    <li><div className="sidebar__listItem"><FaInfo className="sidebar__icon" /><span>About us</span></div></li>
                    <li><div className="sidebar__listItem"><FaMessage className="sidebar__icon" /><span>Contact us</span></div></li>
                    <li><a className="button is-light">Sign in<FaSignInAlt className="sidebar__icon" /></a></li>
                </ul>
                <SocialLinks/>
            </div>
        </div>
    )

}