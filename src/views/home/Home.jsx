import "./Styles.css"
// import Parallax from '../../core/infrastructure/components/parallax/Parallax'
import logo from "../../assets/logo3.png"
import meta from "../../assets/meta.webp"
import { BiSolidCarMechanic } from "react-icons/bi";

export const Home = () => {
  return (
    <>
        <div>
            <div className="bgimg-1">
                <div className="caption">
                        <img src={logo} style={{width:"35vw", color:"black"}}/>
                </div>
            </div>

            <article className="section">
                
                <div className="secunt">
                    <p style={{fontSize:"1.3rem"}}>
                        Your premier destination for auto repair in Colorado! With over 20 years of experience, we provide dent, collision, and hail damage repair services. Our highly skilled team ensures flawless results using state-of-the-art technology. We prioritize customer satisfaction and vehicle integrity. Explore our services online and contact us to schedule an appointment. Thank you for choosing Collision Center & PDR to restore your vehicle's beauty and performance!
                    </p>
                </div>

                <div className="first">
                    <h2><BiSolidCarMechanic/> Welcome to Collision Center & PDR !! <BiSolidCarMechanic/></h2>
                    <p style={{fontSize:"1.3rem"}}>
                        Your premier destination for auto repair in Colorado! With over 20 years of experience, we provide dent, collision, and hail damage repair services. Our highly skilled team ensures flawless results using state-of-the-art technology. We prioritize customer satisfaction and vehicle integrity. Explore our services online and contact us to schedule an appointment. Thank you for choosing Collision Center & PDR to restore your vehicle's beauty and performance!
                    </p>
                </div>
                
                <div className="secunt">
                    <p style={{fontSize:"1.3rem"}}>
                        Your premier destination for auto repair in Colorado! With over 20 years of experience, we provide dent, collision, and hail damage repair services. Our highly skilled team ensures flawless results using state-of-the-art technology. We prioritize customer satisfaction and vehicle integrity. Explore our services online and contact us to schedule an appointment. Thank you for choosing Collision Center & PDR to restore your vehicle's beauty and performance!
                    </p>
                </div>
            </article>

            <div className="bgimg-2">
                <div className="caption">
                    <span className="border">Discover Our Premier Services</span>
                </div>
            </div>

            <div className="section">
                <h3 className="border"><b>Collision - Center & PDR</b></h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam labore quo similique nesciunt quas fugit magnam quis vitae debitis reiciendis.
                    Illo, magni quam vitae suscipit sunt doloremque vero mollitia quisquam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam labore quo similique nesciunt quas fugit magnam quis vitae debitis reiciendis.
                    Illo, magni quam vitae suscipit sunt doloremque vero mollitia quisquam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam labore quo similique nesciunt quas fugit magnam quis vitae debitis reiciendis.
                    Illo, magni quam vitae suscipit sunt doloremque vero mollitia quisquam.
                </p>
            </div>

            <div className="bgimg-3">
                <div className="caption">
                    <img src={logo} style={{width:"35vw", color:"black"}}/>
                </div>
            </div>


        </div>
    </>
  )
}
