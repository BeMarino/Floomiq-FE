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

        <div className="sidebar  items-stretch justify-between w-full">
                <div className="flex flex-col bg-lime-200 justify-between overflow-hidden h-full py-6">
                <ul className="flex flex-col justify-between text-xl pt-4 gap-8 ml-[10%]">
                    <li><Link className="flex flex-row gap-4 w-fit" to={"/"} style={{color: 'black'}} onClick={() => setOpenHamburger(false)}><FaHome/><span>Home</span></Link></li>
                    <li><Link className="flex flex-row text-nowrap gap-4 w-fit" to={"/explore-plants"} onClick={() => setOpenHamburger(false)} style={{color: 'black'}}><FaSearch/><span>Ricerca piante</span></Link></li>
                    <li><Link className="flex flex-row text-nowrap gap-4 w-fit text-black" onClick={() => setOpenHamburger(false)}> <GiPlantWatering/><span>Chi siamo</span></Link></li>
                    <li><Link className="flex flex-row gap-4 w-fit text-black" onClick={() => setOpenHamburger(false)}><FaInfo/><span>News</span></Link></li>
                    <li><Link className="flex flex-row gap-4 w-fit text-black" onClick={() => setOpenHamburger(false)}><FaMessage/><span>Contatti</span></Link></li>
                    <li><Link to={"/login"} className="button " onClick={() => setOpenHamburger(false)}>Sign in<FaSignInAlt/></Link></li>
                </ul>
                <SocialLinks/>
            </div>
        </div>
    )

}