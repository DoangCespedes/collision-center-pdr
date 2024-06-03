import a from '../../../../../assets/mustang/a.jpeg';
import b from '../../../../../assets/mustang/b.jpeg';
import c from '../../../../../assets/mustang/c.jpeg';
import e from '../../../../../assets/mustang/d.jpeg';
import d from '../../../../../assets/mustang/e.jpeg';
import f from '../../../../../assets/mustang/f.jpeg';


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
