import './WhyChooseUse.css'
// import logo from "../../../../assets/logo2.png";
import { FaCar, FaShieldAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa';

export default function WhyChooseUse() {
  const features = [
    {
        title: "Comprehensive Services",
        description: "From PDR and collision repair to hail damage, painting, interior repair, and more.",
    //   image: logo
        icon: <FaCar />
    },
    {
        title: "Safety First",
        description: "Thorough inspections to ensure your vehicle is safe after repairs.",
    //   image: logo
        icon: <FaShieldAlt />
    },
    {
        title: "Quality and Affordability",
        description: "High-quality services at competitive prices.",
    //   image: logo
        icon: <FaMoneyBillWave />
    },
    {
        title: "Convenience",
        description: "Accessible location in Colorado with flexible hours and fast service.",
    //   image: 
        icon: <FaClock />
    }
  ]

  return (
    <div className="why-choose-us">
      <h2>Why Choose Collision Center & PDR in Colorado? </h2>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            {/* <img src={feature.image} alt={feature.title} className="feature-image" /> */}
            <div className="feature-icon">{feature.icon}</div> {/* Renderiza el ícono */}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}