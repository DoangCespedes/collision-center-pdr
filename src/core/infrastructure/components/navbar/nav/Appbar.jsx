import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../../../assets/logo2.png";
import { FaFlagCheckered } from "react-icons/fa";
import "./Styles.css";

const Appbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link to='/'>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link to='/pdr' className="nav-link btn btn-danger">
                <h3 className="routes">PDR <FaFlagCheckered /></h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/door_ding' className="nav-link btn btn-warning">
                <h3 className="routes">Door Ding <FaFlagCheckered /></h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/collision' className="nav-link btn btn-success ">
                <h3 className="routes">Collision <FaFlagCheckered /></h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link btn btn-info">
                <h3 className="routes">Detailing <FaFlagCheckered /></h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/gallery' className="nav-link btn btn-primary">
                <h3 className="routes">Gallery <FaFlagCheckered /></h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link btn btn-secondary">
                <h3 className="routes">Contact <FaFlagCheckered /></h3>
              </Link>
            </li>
          </ul>
          <div className="navbar-text call">
            <h6>
              <FiPhoneCall /> CALL US: +1.719.283.7020
              <span style={{ marginLeft: '1rem' }}><FiPhoneCall /></span>
              CALL US: +1.786.636.4189
            </h6>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Appbar;
