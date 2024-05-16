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

        <div className="transition-all ease-in-out delay-150 duration-1000  opacity 0.3s ">
            <div className="w-full h-screen flex flex-col bg-lime-300 justify-between overflow-hidden"  >
                <ul className="flex flex-col justify-between">
                    <li><Link to={"/"} style={{color: 'black'}}><div ><FaHome  /><span >Home</span></div></Link></li>
                    <li><Link to={"/explore-plants"} style={{color: 'black'}}><div ><FaSearch  /><span>Explore Plants</span></div></Link></li>
                    <li><div ><GiPlantWatering  /><span>Gardening Tips</span></div></li>
                    <li><div ><FaInfo  /><span>About us</span></div></li>
                    <li><div ><FaMessage  /><span>Contact us</span></div></li>
                    <li><a className="button is-light">Sign in<FaSignInAlt  /></a></li>
                </ul>
                <SocialLinks/>
            </div>
        </div>
    )

}