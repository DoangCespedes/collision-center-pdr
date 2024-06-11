import './Style.css';
import { AiFillInstagram } from "react-icons/ai";
import {FaWhatsappSquare} from 'react-icons/fa'
import {IoLogoFacebook} from 'react-icons/io'
import {SiMaplibre} from 'react-icons/si'
import { FaTiktok } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

export const NavSeedDial = () => {
    return (

        <>
            <div className="navigation">
                <a href="https://www.facebook.com/profile.php?id=100072790695784" >
                    <RiFacebookFill className="icon"/>
                </a>
                <a href="https://www.instagram.com/collicenter_pdr/" >
                    <FaInstagram className="icon"/>
                </a>
                <a href="https://wa.me/17866364189?text=I%20want%20a%20date%20in%20Collicion%20Center%20&%20PDR" >
                    <RiWhatsappLine className="icon"/>
                </a>
                <a href="https://www.tiktok.com/@joseventura9577?lang=es" >
                    <FaTiktok className="icon"/>
                </a>
                <a href="https://maps.app.goo.gl/FRbDBYYeYSpZ48wM9">
                    <RiMapPinLine className="icon"/>
                </a>
            </div>
        </>
      )
    }
    
    let Icons = document.querySelectorAll('.navigation.icon')
    Icons.forEach((icon) => {
        icon.addEventListener('click', () => {
            changeActive();
            icon.classList.add('active-nav')
        })
    })
    const changeActive = () =>{ 
        Icons.forEach(icon => {
            icon.classList.remove('active-nav')
        })
    }
    
    