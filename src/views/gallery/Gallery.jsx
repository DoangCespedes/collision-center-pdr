import { ImagesGalery2 } from '../../core/infrastructure/components/galeries/gallery2/ImagesGallery'
import { ImagesGalery3 } from '../../core/infrastructure/components/galeries/gallery3/ImagesGallery'
import { ImagesGalery4 } from '../../core/infrastructure/components/galeries/gallery4/ImagesGallery'
import { ImagesGalery5 } from '../../core/infrastructure/components/galeries/gallery5/ImagesGallery'
import { ImagesGalery6 } from '../../core/infrastructure/components/galeries/gallery6/ImagesGallery'
import { ImagesGalery7 } from '../../core/infrastructure/components/galeries/gallery7/ImagesGallery'
import MediaPlayer from '../../core/infrastructure/components/mediaPlayer/MediaPlayer'
import SliderCorolla from '../../core/infrastructure/components/sliders/SliderCorolla'
import SliderMustang from '../../core/infrastructure/components/sliders/SliderMustang'
import SliderTundra from '../../core/infrastructure/components/sliders/SliderTundra'

export const Gallery = () => {
  return (
    <>
      <div className='container text-center'>
        <h2 style={{textAlign:"center", marginBottom:"2rem", padding:"1rem"}}>Welcome to Our Gallery!</h2>
        <div className='container'>
          <p>We are pleased to welcome you to the Collision Center & PDR gallery. Here you can explore photos and videos of the vehicles we have meticulously and dedicatedly restored.</p>
        </div>
      </div>

      <div className='container' style={{display:"flex", flexDirection:"column"}}> 
        <div style={{justifyContent:"center", alignItems:"center"}}>
          <SliderMustang/>
        </div>
      </div>
      
      <div className='container' style={{background:"rgba(255,255,255, 0.2)", borderRadius:"20px 20px 20px 20px"}}>
      <br/><ImagesGalery6/> <br/><ImagesGalery2/><br/><ImagesGalery5/><br/><ImagesGalery4/><br/><ImagesGalery7/><br/><ImagesGalery3/> <br/>
      </div>
      

      <div className='container' style={{display:"flex",flexDirection:"wrap", width:"100%"}}> 
        <div style={{justifyContent:"spaceBetwen", alignItems:"center", width:"50%"}}>
          <SliderTundra/>
        </div>
        <div style={{justifyContent:"spaceBetwen", alignItems:"center", width:"50%"}}>
          <SliderCorolla/>
        </div>
      </div>

      <MediaPlayer/>

    </>
  )
}
