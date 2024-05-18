
import logo from "../../../../assets/log.png"
import "./Styles.css"

export const Cards = () => {
  return (
    <>
        <div className="container__cards">

            <div className="card">
                <div className="cover">
                    <img src={logo} alt=""/>
                    
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>HAIL & DENT REPAIR</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                    
                </div>
            </div>

            <div className="card">
                <div className="cover">
                <img src={logo} alt=""/>
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>AUTO DETAILING</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                    
                </div>
            </div>

            <div className="card">
                <div className="cover">
                    <img src={logo} alt=""/>
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>CERAMIC COATINGS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                    
                </div>
            </div>

            <div className="card">
                <div className="cover">
                    <img src={logo} alt=""/>
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>VINYL VEHICLE WRAPS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                    
                </div>
            </div>

            <div className="card">
                <div className="cover">
                    <img src={logo} alt=""/>
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>WINDOW TINTING</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                    
                </div>
            </div>

            <div className="card">
                <div className="cover">
                    <img src={logo} alt=""/>
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>PAINT CORRECTION</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
                    
                </div>
            </div>

            </div>
    </>
  )
}
