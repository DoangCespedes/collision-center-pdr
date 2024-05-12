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
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="#"><IoLogoFacebook/></a></li>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="#"><FaInstagramSquare/></a></li>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="#"><FaWhatsappSquare/></a></li>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="#" ><ImMail/></a></li>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="#" ><SiMaplibre/></a></li>
                            <li style={{fontSize:'26px'}}><a className="dropdown-item" href="#" ><ImMail/></a></li>
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
