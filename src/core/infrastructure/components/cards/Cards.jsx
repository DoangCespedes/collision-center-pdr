
import logo from "../../../../assets/log.png"
import a from "../../../../assets/cards/hail.jpg"
import b from "../../../../assets/cards/detail.jpg"
import c from "../../../../assets/cards/ceramic.jpg"
import d from "../../../../assets/cards/paint.jpg"
import e from "../../../../assets/cards/window.jpg"
import f from "../../../../assets/cards/restoration.jpg"
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
                    <img src={a} style={{width:"8rem", borderRadius:"5px 5px 5px 5px"}}/>
                    
                </div>
            </div>

            <div className="card">
                <div className="cover">
                <img src={logo} alt=""/>
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>AUTO <br/>DETAILING</h2>
                    <img src={b} style={{width:"8rem" , borderRadius:"5px 5px 5px 5px"}}/>

                    
                </div>
            </div>

            <div className="card">
                <div className="cover">
                    <img src={logo} alt=""/>
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>CERAMIC COATINGS</h2>
                    <img src={c} style={{width:"8rem" , borderRadius:"5px 5px 5px 5px"}}/>
                    
                </div>
            </div>

            <div className="card">
                <div className="cover">
                    <img src={logo} alt=""/>
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>PAINT CORRECTION</h2>
                    <img src={d} style={{width:"8rem" , borderRadius:"5px 5px 5px 5px"}}/>

                    
                </div>
            </div>

            <div className="card">
                <div className="cover">
                    <img src={logo} alt=""/>
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>WINDOW <br/> TINTING</h2>
                    <img src={e} style={{width:"8rem" , borderRadius:"5px 5px 5px 5px"}}/>
                    
                </div>
            </div>

            <div className="card">
                <div className="cover">
                    <img src={logo} alt=""/>
                    <div className="img__back"></div>
                </div>
                <div className="description">
                    <h2>VEHICLE RESTORATION</h2>
                    <img src={f} style={{width:"8rem" , borderRadius:"5px 5px 5px 5px"}}/>

                    
                </div>
            </div>

            </div>
    </>
  )
}
