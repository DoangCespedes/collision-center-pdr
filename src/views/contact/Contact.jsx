import MapView from '../../core/infrastructure/components/mapView/MapView'
import logo from "../../assets/logo3.png"
import './Styles.css'


export const Contact = () => {
  return (
    <>

      <div className="bgimg-4">
          <div className="caption">
                  <img src={logo} className="logo-contac"/>
          </div>
      </div>
      <h2 style={{textAlign:"center"}}>Contact</h2>
      <div className='contenedor mt-2'>
        <div className='form mt-2'> 
          <form>
          <label for="formGroupExampleInput2" className="form-label">Services</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select a service</option>
            <option value="1">Hail / Dent Repair</option>
            <option value="2">Detailing</option>
            <option value="3">Ceramic Coatings (Ceramic Pro)</option>
            <option value="3">Paint Correction</option>
            <option value="3">Window Tinting</option>
            <option value="3">Vehicle Restoration</option>
          </select>

          <div style={{width:"100%", display:"flex", flexWrap:"wrap"}}> 
            <div className="mb-3" style={{width:"46%", justifyContent:"space-between", marginRight:"1rem"}}>
              <label for="formGroupExampleInput" className="form-label">Make</label>
              <input type="text" className="form-control" id="make" placeholder="Make"/>
            </div>

            <div className="mb-3" style={{width:"46%" , justifyContent:"space-between", marginLeft:"1rem"}}>
              <label for="formGroupExampleInput" className="form-label">Year</label>
              <input type="text" className="form-control" id="year" placeholder="year"/>
            </div>
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Model</label>
            <input type="text" className="form-control" id="model" placeholder="Model"/>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Phone number</label>
            <input type="number" className="form-control" id="phone" placeholder="Phone number"/>
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Full name</label>
            <input type="text" className="form-control" id="name" placeholder="Full name"/>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
            <label className="form-check-label" for="flexCheckIndeterminate">
                I consent to receiving calls & text messages from Mr. Dentless regarding the service for my vehicle.
            </label>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Describe the damage</label>
            <textarea className="form-control" id="damage" rows="3"></textarea>
          </div>

          
          <div className="mb-3">
            <label for="formFile" className="form-label">Policy Card Image Upload</label>
            <input className="form-control" type="file" id="formFile"/>
          </div>

          <div className="mb-3">
            <label for="formFile" className="form-label">Insurance Estimate Image/PDF Upload</label>
            <input className="form-control" type="file" id="formFile"/>
          </div>


          <button type="button" className="btn btn-secondary btn-lg">Send</button>

        </form>

        </div>

        <div className='map mt-2'>
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
        </div> 
      </div>
    </>
  )
}
