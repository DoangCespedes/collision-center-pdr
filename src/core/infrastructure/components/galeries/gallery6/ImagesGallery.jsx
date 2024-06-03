import a from '../../../../../assets/mustag gris/a.jpeg';
import b from '../../../../../assets/mustag gris/b.jpeg';
import c from '../../../../../assets/mustag gris/c.jpeg';
import e from '../../../../../assets/mustag gris/d.jpeg';
import d from '../../../../../assets/mustag gris/e.jpeg';
import f from '../../../../../assets/mustag gris/f.jpeg';


import './Styles.css'

export const ImagesGalery6 = () => {
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
