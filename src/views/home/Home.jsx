import "./Styles.css"
import logo from "../../assets/logo3.png"
import a from "../../assets/4.jpg"
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
            
            <article className="section container">
                
                <div className="first">
                    <h2><FaFlagCheckered/> Welcome to Collision Center & PDR <FaFlagCheckered/></h2>
                    <p style={{fontSize:"1.3rem"}}>
                        Your premier destination for auto repair in Colorado! With over 20 years of experience, we provide dent, collision, and hail damage repair services. Our highly skilled team ensures flawless results using state-of-the-art technology. We prioritize customer satisfaction and vehicle integrity. Explore our services online and contact us to schedule an appointment. Thank you for choosing Collision Center & PDR to restore your vehicle's beauty and performance!
                    </p>
                </div>

                <div className="secunt">
                    <br/><h5>●  Auto Hail Repair <FaFlagCheckered/></h5>  <br/><hr/><h5>●  Auto Detailing <FaFlagCheckered/></h5> <br/><hr/><h5>●  Dent Repair <FaFlagCheckered/>s</h5> <br/><hr/><h5>●  Ceramic Coatings <FaFlagCheckered/></h5> <br/><hr/><h5>●  Window Tinting <FaFlagCheckered/></h5><br/><hr/> <h5>●  Classic Vehicle Restoration Services <FaFlagCheckered/></h5><br/><hr/> 
                    
                </div>

                
                
                <ImagesGalery3/>
                
            </article>

                
            <article className="section container bgimg-3">
                
                <div >
                    <h2 style={{textAlign:"center", background:"rgba(100,100,100, 0.7)", borderRadius:"10px 10px 10px 10px"}}><FaFlagCheckered/> Why Choose Collision Center & PDR in Colorado? <FaFlagCheckered/></h2>
                    <p style={{textAlign:"end"}}>
                    At Collision Center & PDR, we pride ourselves on providing exceptional auto repair services with over 5 years of experience. Here are several reasons why we stand out as the best choice for your vehicle repair needs in Colorado:

                    <br/><br/><h5>Comprehensive Services:</h5> From PDR and collision repair to hail damage, painting, interior repair, and more.

                    <br/><br/><h5>Safety First:</h5> Thorough inspections to ensure your vehicle is safe after repairs.

                    <br/><br/><h5>Quality and Affordability:</h5>  High-quality services at competitive prices.

                    <br/><br/><h5>Convenience:</h5>Accessible location in Colorado with flexible hours and fast service.

                    <br/><br/><h5>Community Commitment:</h5> We are a local business dedicated to supporting and serving our community.

                    <br/><br/>When you choose Collision Center & PDR, you're choosing a trusted partner dedicated to restoring your vehicle's beauty and performance.
                    </p>
                </div>

                {/* <div className="secunt">
                    <img src={a} style={{width:"250px"}}/>
                </div> */}
            </article>

                {/* <div className="third">
                    <div style={{color:"white", cursor:"pointer", textAlign:"center", border:'2spx solid #f5f5f5',borderRadius:"25%",background:"red"}}>
                        <h5>Agenda tu cita <BiSolidCarMechanic/></h5>
                    </div>

                </div>

            <div className="bgimg-2">
                <div className="caption">
                    <span className="border">Discover Our Premier Services</span>
                </div>
            </div> */}

            <div className="container">
                <h2 style={{textAlign:"center", marginTop:"3rem",  background:"rgba(100,100,100, 0.7)", borderRadius:"10px 10px 10px 10px"}}> <FaFlagCheckered/> Discover Our Premier Services <FaFlagCheckered/></h2>
            </div>    

            <div className="section container" style={{textAlign:"center", marginTop:"3rem",  background:"rgba(100,100,100, 0.7)", borderRadius:"10px 10px 10px 10px"}}>
                <Cards/>
            </div>


            <div className="bgimg-1">
                <div className="caption">
                        <span className="border">contactanos</span> 
                        <img src={logo} className="logo-cap"/>
                </div>
            </div>


            


        </div>
    </>
  )
}
