import MapView from '../../core/infrastructure/components/mapView/MapView'
import './Styles.css'

export const Contact = () => {
  return (
    <>

      <h2 style={{textAlign:"center"}}>Contact</h2>
      <div className='contenedor mt-2'>
      <div className="container mt-2">
          <div className="row">
          <p>
            Our new address is 504 N Mayhill Rd, Denton, TX 76208. We hope to see you soon!, during our business hours:
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
        
        <div className='form mt-2'> 
          <form>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Example label</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Another label</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
            <label className="form-check-label" for="flexCheckIndeterminate">
              Indeterminate checkbox
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
            <label className="form-check-label" for="flexCheckIndeterminate">
              Indeterminate checkbox
            </label>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <button type="button" className="btn btn-secondary btn-lg">Large button</button>

        </form>

        </div>

        <div className='map mt-2'>
          <MapView/>
        </div> 
      </div>
    </>
  )
}
