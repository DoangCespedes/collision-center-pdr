import "./Styles.css"
import logo from "../../assets/logo3.png"
// import a from "../../assets/4.jpg"
// import { BiSolidCarMechanic } from "react-icons/bi";
import { FaFlagCheckered } from "react-icons/fa";
// import About from "../../core/infrastructure/components/about/About";
import { ImagesGalery } from "../../core/infrastructure/components/galeries/gallery1/ImagesGallery";
import MapView from "../../core/infrastructure/components/mapView/MapView";
import WhyChooseUse from "../../core/infrastructure/components/why-choose-us/WhyChooseUse";
import { FiPhoneCall } from "react-icons/fi";

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
                    <h2>
                    <span className="text-primary"> Welcome to Collision </span>
                    <span style={{color:'rgb(255,0,0)'}}>Center & </span>
                    <span>PDR <FaFlagCheckered/></span>
                    </h2>
                    <p style={{fontSize:"1.3rem"}}>
                        Your premier destination for auto repair in Colorado! With over 20 years of experience, we provide dent, collision, and hail damage repair services. Our highly skilled team ensures flawless results using state-of-the-art technology. We prioritize customer satisfaction and vehicle integrity. Explore our services online and contact us to schedule an appointment. Thank you for choosing Collision Center & PDR to restore your vehicle's beauty and performance!
                    </p>
                </div>

                <div className="secunt">
                    <h5>● Paintless Dent Repair </h5> <hr/><h5>● Door Ding </h5> <hr/><h5>● Collision </h5> <hr/><h5>●  Detailing </h5>

                </div>

                <ImagesGalery/>

            </article>

            <article >
                <WhyChooseUse/>
            </article>


            {/* <div className="container">
                <h2 style={{textAlign:"center", marginTop:"3rem",  background:"rgba(100,100,100, 0.7)", borderRadius:"10px 10px 10px 10px"}}> <FaFlagCheckered/> Discover Our Premier Services <FaFlagCheckered/></h2>
            </div>

            <div className="section container" style={{textAlign:"center", marginTop:"3rem",  background:"rgba(100,100,100, 0.7)", borderRadius:"10px 10px 10px 10px"}}>
                <Cards/>
            </div> */}


            {/* <div className="bgimg-2">
                <div className="caption">
                        <img src={logo} className="logo-cap"/>
                </div>
            </div> */}

<div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', padding: '3rem' }}>
  <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '40%', padding: '2rem', minWidth: '300px' }}>
    <h2 style={{ textAlign: "center" }}>Contact us</h2>
    <h6>
      <FiPhoneCall /> CALL US: +1.719.283.7020
      <span style={{ marginLeft: '1rem' }}><FiPhoneCall /></span>
      CALL US: +1.786.636.4189
    </h6>
    <p>
      Our new address is 3433 N Prospect St, Colorado Springs, CO 80907. We hope to see you soon!, during our business hours:
    </p>
    <div className="row">
      <h6>Monday to Friday: 9am - 6pm</h6>
    </div>
    <div className="row">
      <h6>Saturdays: 9am - 2pm</h6>
    </div>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '60%', padding: '1rem', minWidth: '300px' }}>
    <MapView />
  </div>
</div>


        </div>
    </>
  )
}
