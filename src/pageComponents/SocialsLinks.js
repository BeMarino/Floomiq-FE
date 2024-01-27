import { FaFacebook, FaInstagram , FaLinkedin, FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function SocialLinks() {
    return (
        <>
            <div className='socials-links'>
                <div >
                    <FaYoutube />
                </div>
                <div >
                    <FaLinkedin />
                </div>
                <div >
                    <FaXTwitter />
                </div>
                <div >
                    <FaInstagram />
                </div>
                <div >
                    <FaFacebook />
                </div>
            </div>
        </>
    )
}