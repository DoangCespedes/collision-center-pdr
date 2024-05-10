import { Link } from "react-router-dom"
import {ImMail} from 'react-icons/im'
import {FaWhatsappSquare} from 'react-icons/fa'
import {TiGroupOutline} from 'react-icons/ti'
import {IoLogoFacebook} from 'react-icons/io'
import {SiMaplibre} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
import logo from "../../../../assets/logo2.png"


export const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link to='/'>
                    <img src={logo}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Collision-Center-&-PDR</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        
                        <Link to='/'>
                            <li className="nav-item">
                                    <p style={{fontSize:'1.2em'}} className="nav-link active" aria-current="page" >Home</p>
                            </li> 
                        </Link>
                        <Link to='/gallery'>
                            <li className="nav-item">
                                    <p className="nav-link active" aria-current="page" >Gallery</p>
                            </li> 
                        </Link>
                        <Link to='/contact'>
                            <li className="nav-item">
                                    <p className="nav-link active" aria-current="page" >Contact</p>
                            </li> 
                        </Link>
                        <Link to='/about'>
                            <li className="nav-item">
                                    <p className="nav-link active" aria-current="page" >About</p>
                            </li> 
                        </Link>
                        <Link to='/work'>
                            <li className="nav-item">
                                    <p className="nav-link active" aria-current="page" >My work</p>
                            </li> 
                        </Link>

                    <li className="nav-item dropdown">
                        {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a> */}
                        <ul className="dropdown-menu dropdown-menu-dark" style={{display:"flex"}}>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="https://www.facebook.com/profile.php?id=100090143857535"><IoLogoFacebook/></a></li>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="https://www.instagram.com/lujancarautohailrepair/"><FaInstagramSquare/></a></li>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="https://wa.me/15127828523?text=I%20want%20a%20date%20in%20LujanCar"><FaWhatsappSquare/></a></li>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="https://mail.google.com" ><ImMail/></a></li>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="https://www.google.com/maps/place/127+Roy+Davis+Rd,+Elgin,+TX+78621/@30.332869,-97.3470843,168m/data=!3m1!1e3!4m6!3m5!1s0x8644eca8abaaa2c5:0x6f69e54b9c4bac76!8m2!3d30.3329232!4d-97.3464654!16s%2Fg%2F11v03hg5zx?authuser=0&entry=ttu" ><SiMaplibre/></a></li>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="https://mail.google.com" ><ImMail/></a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </nav>
    </>
  )
}
