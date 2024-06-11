import a from '../../../../../assets/silverado/a.jpeg';
import b from '../../../../../assets/silverado/b.jpeg';
import c from '../../../../../assets/silverado/c.jpeg';
import e from '../../../../../assets/silverado/d.jpeg';
import d from '../../../../../assets/silverado/e.jpeg';
import f from '../../../../../assets/silverado/f.jpeg';


import './Styles.css'

export const ImagesGalery4 = () => {
  return (
    <div className='container'>
        <section>
        
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
            
            src={a}
            alt="First slide"
          />
        <img
            
            src={b}
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
