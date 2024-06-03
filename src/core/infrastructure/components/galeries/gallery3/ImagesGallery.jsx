import a from '../../../../../assets/corvete/a.jpeg';
import b from '../../../../../assets/corvete/b.jpeg';
import c from '../../../../../assets/corvete/c.jpeg';
import e from '../../../../../assets/corvete/d.jpeg';
import d from '../../../../../assets/corvete/e.jpeg';
import f from '../../../../../assets/corvete/f.jpeg';


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
