import "./Parallax.css"
import a from "../../../../assets/logo.png"

const Parallax = () => {
  return (
    <div>
        <div className="bgimg-1">
            {/* ESTE DIV ES LA BASE DEL PARALLAX , LO QUE HACEMOS ES REPLICARLO COMO bgimg-2 y bgimg-3*/}
            <div className="caption">
                <span className="border"></span>
            </div>
        </div>

        <div className="section">
            <h3 className="border">Doang y leo son los mejores</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam labore quo similique nesciunt quas fugit magnam quis vitae debitis reiciendis.
                Illo, magni quam vitae suscipit sunt doloremque vero mollitia quisquam.
            </p>
        </div>

        <div className="bgimg-2">
            <div className="caption">
                <span className="border">Parallax-TEST-2</span>
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
                <span className="border">Parallax-TEST-3</span>
            </div>
        </div>


    </div>
  )
}

export default Parallax