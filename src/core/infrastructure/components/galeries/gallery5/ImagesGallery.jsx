import a from '../../../../../assets/cabina roja/a.jpeg';
import b from '../../../../../assets/cabina roja/b.jpeg';
import c from '../../../../../assets/cabina roja/c.jpeg';
import e from '../../../../../assets/cabina roja/d.jpeg';
import d from '../../../../../assets/cabina roja/e.jpeg';
import f from '../../../../../assets/cabina roja/f.jpeg';


import './Styles.css'

export const ImagesGalery5 = () => {
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
