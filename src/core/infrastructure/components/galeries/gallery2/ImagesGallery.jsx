import a from '../../../../../assets/ram/a.jpeg';
import b from '../../../../../assets/ram/b.jpeg';
import c from '../../../../../assets/ram/c.jpeg';
import e from '../../../../../assets/ram/d.jpeg';
import d from '../../../../../assets/ram/e.jpeg';
import f from '../../../../../assets/ram/f.jpeg';


import './Styles.css'

export const ImagesGalery2 = () => {
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
