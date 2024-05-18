import a from '../../../../../assets/2.jpg';
import b from '../../../../../assets/7.jpg';
import c from '../../../../../assets/12.jpg';
import d from '../../../../../assets/13.jpg';
import e from '../../../../../assets/14.jpg';
import f from '../../../../../assets/10.jpg';


import './Styles.css'

export const ImagesGalery3 = () => {
  return (
    <div className='container'>
        <section>
        <img
            
            src={a}
            alt="First slide"
          />
        <img
            
            src={b}
            alt="First slide"
          />
       <img
            
            src={c}
            alt="First slide"
          />
      <img
            
            src={d}
            alt="First slide"
          />
      <img
            
            src={e}
            alt="First slide"
          />
      <img
            
            src={f}
            alt="First slide"
          />
      
        </section>
    </div>
  )
}
