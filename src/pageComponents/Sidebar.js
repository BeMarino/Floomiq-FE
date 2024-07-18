import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa"
import { FaInfo } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6";
import SocialLinks from "./SocialsLinks";
import { GiPlantWatering } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoLibraryOutline } from "react-icons/io5";




export default function Sidebar({setOpenHamburger, openHamburger, user}) {

  let navigate = useNavigate();

  function handleSidebarClick(url){
    console.log(url)
    setOpenHamburger(!openHamburger)
    navigate(url)
  }

  return (

    <div className="sidebar  items-stretch justify-between w-full">
      <div className="flex flex-col bg-lime-200 justify-between h-full py-6">
        <ul className="flex flex-col justify-between text-xl pt-4 gap-8 ml-[10%]">
          <li><Link className="flex flex-row gap-4 w-fit" to="/" style={{ color: 'black' }} onClick={() => handleSidebarClick("/")}><FaHome /><span>Home</span></Link></li>
          <li><Link className="flex flex-row text-nowrap gap-4 w-fit" to="/explore-plants" onClick={()=>handleSidebarClick("/explore-plants")} style={{ color: 'black' }}><FaSearch /><span>Ricerca piante</span></Link></li>
          <li><Link className="flex flex-row text-nowrap gap-4 w-fit"  to="/my-projects" onClick={()=>handleSidebarClick("/my-projects")}> <IoLibraryOutline /><span>My Floomiq</span></Link></li>
          <li><Link className="flex flex-row gap-4 w-fit text-black" onClick={handleSidebarClick}><FaInfo /><span>News</span></Link></li>
          <li><Link className="flex flex-row gap-4 w-fit text-black" onClick={handleSidebarClick}><FaMessage /><span>Contatti</span></Link></li>
          <li><Link to="/login" className="flex flex-row gap-4 w-fit text-black" onClick={() => handleSidebarClick("/login")}><FaSignInAlt /><span>Accedi</span></Link></li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  )

}