import "./Styles.css"
import logo from "../../assets/logo3.png"
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaFlagCheckered } from "react-icons/fa";
import { Cards } from "../../core/infrastructure/components/cards/Cards";
import { ImagesGalery3 } from "../../core/infrastructure/components/galeries/galery1/ImagesGallery";

export const Home = () => {
  return (
    <>
        <div>
            <div className="bgimg-1">
                <div className="caption">
                        <img src={logo} className="logo-cap"/>
                </div>
            </div>

            <article className="section ">
                
                <div className="secunt">
                    <p style={{fontSize:"1.3rem"}}>
                    <br/>●  Auto Hail Repair  <br/><hr/>●  Auto Detailing <br/><hr/>●  Dent Repair <br/><hr/>● Ceramic Coatings <br/><hr/>● Window Tinting<hr/>● Auto Wraps<hr/>
                    </p>
                </div>

                <div className="first">
                    <h2><FaFlagCheckered/> Welcome to Collision Center & PDR !! <FaFlagCheckered/></h2>
                    <p style={{fontSize:"1.3rem"}}>
                        Your premier destination for auto repair in Colorado! With over 20 years of experience, we provide dent, collision, and hail damage repair services. Our highly skilled team ensures flawless results using state-of-the-art technology. We prioritize customer satisfaction and vehicle integrity. Explore our services online and contact us to schedule an appointment. Thank you for choosing Collision Center & PDR to restore your vehicle's beauty and performance!
                    </p>
                </div>
                
                <ImagesGalery3/>
                
            </article>

                

                {/* <div className="third">
                    <div style={{color:"white", cursor:"pointer", textAlign:"center", border:'2spx solid #f5f5f5',borderRadius:"25%",background:"red"}}>
                        <h3>Agenda tu cita <BiSolidCarMechanic/></h3>
                    </div>

                </div>

            <div className="bgimg-2">
                <div className="caption">
                    <span className="border">Discover Our Premier Services</span>
                </div>
            </div> */}

                
            <h2 style={{textAlign:"center", marginTop:"3rem"}}>Discover Our Premier Services</h2>

            <div className="section">
                <Cards/>
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
