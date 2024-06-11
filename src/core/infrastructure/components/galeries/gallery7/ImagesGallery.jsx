import a from '../../../../../assets/bmw/a.jpeg';
import b from '../../../../../assets/bmw/b.jpeg';
import c from '../../../../../assets/bmw/c.jpeg';
import e from '../../../../../assets/bmw/d.jpeg';
import d from '../../../../../assets/cabina negra/a.jpeg';
import f from '../../../../../assets/cabina negra/b.jpeg';


import './Styles.css'

export const ImagesGalery7 = () => {
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
            
            src={e}
            alt="First slide"
          />
          <img
            
            src={d}
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
