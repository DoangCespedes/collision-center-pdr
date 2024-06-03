import { Link } from "react-router-dom"
import {ImMail} from 'react-icons/im'
import {FaFlagCheckered, FaWhatsappSquare} from 'react-icons/fa'
import {IoLogoFacebook} from 'react-icons/io'
import {SiMaplibre} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
import logo from "../../../../assets/logo2.png"
import { FiPhoneCall } from "react-icons/fi"
import "./Styles.css"


export const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link to='/'>
                    <img src={logo}/>
                </Link>
                <div className="call">
                <h6> <span><FiPhoneCall/></span> CALL US: +1.719.283.7020 <br/><span><FiPhoneCall/></span> CALL US: +1.786.636.4189</h6>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    
                    <h4 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><FaFlagCheckered/> Collision-Center-&-PDR <FaFlagCheckered/></h4>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        
                        <Link to='/'>
                            <li className="nav-item">
                                <h3  className="nav-link active" aria-current="page" >Home <FaFlagCheckered/></h3>
                            </li> 
                        </Link>
                        <Link to='/gallery'>
                            <li className="nav-item">
                                <h3 className="nav-link active" aria-current="page" >Gallery <FaFlagCheckered/></h3>
                            </li> 
                        </Link>
                        <Link to='/contact'>
                            <li className="nav-item">
                                <h3 className="nav-link active" aria-current="page" >Contact <FaFlagCheckered/></h3>
                            </li> 
                        </Link>

                        <li className="nav-item dropdown" style={{textAlign:"end"}}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <h5> My work <FaFlagCheckered/></h5>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <Link to='/auto-detailing'>
                                <li className="dropdown-item">
                                    <h3 className="nav-link active" aria-current="page" style={{textAlign:"center"}}>Auto Detailing <FaFlagCheckered/></h3>
                                </li> 
                            </Link>
                            <Link to='/ceramic-coatings'>
                                <li className="dropdown-item">
                                    <h3 className="nav-link active" aria-current="page" style={{textAlign:"center"}}>Ceramic Coatings <FaFlagCheckered/></h3>
                                </li> 
                            </Link>
                            <Link to='/hail-dent-repair'>
                                <li className="dropdown-item">
                                    <h3 className="nav-link active" aria-current="page" style={{textAlign:"center"}}>Hail  Dent Repair <FaFlagCheckered/></h3>
                                </li> 
                            </Link>
                            <Link to='/paint-corrections'>
                                <li className="dropdown-item">
                                    <h3 className="nav-link active" aria-current="page" style={{textAlign:"center"}}>Paint Corrections <FaFlagCheckered/></h3>
                                </li> 
                            </Link>
                            <Link to='/vehicle-restoration'>
                                <li className="dropdown-item">
                                    <h3 className="nav-link active" aria-current="page" style={{textAlign:"center"}}>Vehicle Restoration <FaFlagCheckered/></h3>
                                </li> 
                            </Link>
                            <Link to='"/window-tinting'>
                                <li className="dropdown-item">
                                    <h3 className="nav-link active" aria-current="page" style={{textAlign:"center"}}>WindowTinting <FaFlagCheckered/></h3>
                                </li> 
                            </Link>
                        </ul>
                    </li>

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
