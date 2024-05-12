import { NavLink } from 'react-router-dom';
import {ImMail} from 'react-icons/im'
import {FaWhatsappSquare} from 'react-icons/fa'
import {TiGroupOutline} from 'react-icons/ti'
import {IoLogoFacebook} from 'react-icons/io'
import {SiMaplibre} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
import logo from '../../../../assets/logo2.png';
import './Styles.css'


const Footer = () => {
  return (
    <>
        <footer>

            <div class="container__footer">
                <div class="box__footer_logo">
                    <div class="logo">
                    <NavLink to='/'><img src={logo} alt="logo"/></NavLink>
                    </div>
                </div>
                <div class="box__footer">
                    <div class="terms">
                        <h4>Collision center & PDR</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi corrupti perferendis porro dicta, rerum maiores ab commodi reiciendis ad quas neque distinctio suscipit optio et quam doloremque numquam quod?</p>
                    </div>
                </div>

                <div class="box__footer">
                    <h4>Info</h4>
                    <NavLink to='/contact'>Contact</NavLink>  
                    <NavLink to='/galery'>Galery</NavLink>        
                </div>

                <div class="box__footer">
                    <h4>Dcumentation</h4>
                    <NavLink to='/mywork'>My_Work</NavLink>
                    <NavLink to='/about'>About</NavLink>      
                </div>

                <div class="box__footer">
                    <h4>Social Networks</h4>
                    <a href="#"> <IoLogoFacebook/> Facebook</a>
                    <a href="#"><SiMaplibre/> GoogleMap</a>
                    <a href="#"><FaWhatsappSquare/> WhatsApp</a>
                    <a href="#"><FaInstagramSquare/> Instagram</a>
                </div>

            </div>
            <hr/>
            <div class="box__copyright">
                
                <p>All rights reserved © 2024 <b>Collision center & PDR</b></p>
            </div>
            </footer>
    </>
  )
}

export default Footer