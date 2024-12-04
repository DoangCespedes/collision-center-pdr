import { useEffect } from "react";
import "./Styles.css";
import logo from "../../assets/logo3.png";
import { FaFlagCheckered } from "react-icons/fa";
import { ImagesGalery } from "../../core/infrastructure/components/galeries/gallery1/ImagesGallery";
import MapView from "../../core/infrastructure/components/mapView/MapView";
import WhyChooseUse from "../../core/infrastructure/components/why-choose-us/WhyChooseUse";
import { FiPhoneCall } from "react-icons/fi";

export const Home = () => {
  useEffect(() => {
    const modalElement = document.getElementById("welcomeModal");
    const modal = new window.bootstrap.Modal(modalElement);
  
    modal.show();
  
    modalElement.addEventListener("hidden.bs.modal", () => {
      // Hacer algo si es necesario después de cerrar el modal
      console.log("Modal closed and page is interactive again.");
    });
  
    return () => {
      modalElement.removeEventListener("hidden.bs.modal", () => {
        console.log("Cleanup listener");
      });
    };
  }, []);
  

  return (
    <>
      {/* Modal de bienvenida */}
      <div className="modal fade" id="welcomeModal" tabIndex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="welcomeModalLabel" style={{color:'#000'}}>
              Free the Deductible! 🚗💥</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>


            </div>
            <div className="modal-body" > 
              <p style={{color:'#000'}}>At Collision Center & PDR, we cover your deductible! 🛠️ Get up to $500 off for high-quality, hassle-free repairs. 🚗✨</p> 
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Let`s Start!</button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido de tu página */}
      <div>
        <div className="bgimg-1">
          <div className="caption">
            <img src={logo} className="logo-cap" alt="Collision Center Logo" />
          </div>
        </div>

        <article className="section container">
          <div className="first">
            <h2>
              <span className="text-primary"> Welcome to Collision </span>
              <span style={{ color: "rgb(255,0,0)" }}>Center & </span>
              <span>PDR <FaFlagCheckered /></span>
            </h2>
            <p style={{ fontSize: "1.3rem" }}>
              Your premier destination for auto repair in Colorado! With over 20 years of experience...
            </p>
          </div>
          <div className="secunt">
            <h5>● Paintless Dent Repair </h5> <hr /><h5>● Door Ding </h5> <hr /><h5>● Collision </h5> <hr /><h5>● Detailing </h5>
          </div>
          <ImagesGalery />
        </article>

        <article>
          <WhyChooseUse />
        </article>

        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', padding: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '40%', padding: '2rem', minWidth: '300px' }}>
            <h2 style={{ textAlign: "center" }}>Contact us</h2>
            <h6>
              <FiPhoneCall /> CALL US: +1.719.283.7020
              <span style={{ marginLeft: '1rem' }}><FiPhoneCall /></span>
              CALL US: +1.786.636.4189
            </h6>
            <p>Our new address is 3433 N Prospect St, Colorado Springs, CO 80907...</p>
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
  );
};
