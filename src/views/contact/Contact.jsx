// import MapView from '../../core/infrastructure/components/mapView/MapView'
import logo from "../../assets/logo3.png"
import './Styles.css'
import Form from '../../core/infrastructure/components/form/Form'


export const Contact = () => {
  return (
    <>

      <div className="bgimg-4">
          <div className="caption">
                  <img src={logo} className="logo-contac"/>
          </div>
      </div>
      <h2 style={{textAlign:"center"}}>Contact</h2>
      {/* <div className='contenedor mt-2' > */}
         
         <Form/>

        {/* <div className='map mt-2'>
          <div className="container">
            <div className="row">
            <p>
              Our new address is 3433 N Prospect St, Colorado Springs, CO 80907. We hope to see you soon!, during our business hours:
            </p>
              <div className="col-md-6">
                  <div className="row">
                    <h4>Monday to Friday: 9am - 6pm</h4>  
                  </div>
              </div>

              <div className="col-md-6">
                  <div className="row">
                  <h4>Saturdays: 9am - 2pm</h4>
                  </div>
              </div>
            </div>
          </div>
          <MapView/>
        </div>  */}
      {/* </div> */}
    </>
  )
}
