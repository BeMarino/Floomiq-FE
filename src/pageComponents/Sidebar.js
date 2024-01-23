import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OutsideClick from "../utils/clickOutside";
import { useRef, useState } from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Sidebar(props) {
       return (
        
        <div>
            <div className="sidebar"  >
            <div className="sidebar-logo"></div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </div>
    )

}