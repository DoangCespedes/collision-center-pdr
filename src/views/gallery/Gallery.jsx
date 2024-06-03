import React from 'react'
// import Slider from '../../core/infrastructure/components/slider/Slider'
import { ImagesGalery } from '../../core/infrastructure/components/galeries/gallery1/ImagesGallery'
import { ImagesGalery2 } from '../../core/infrastructure/components/galeries/gallery2/ImagesGallery'
import { ImagesGalery3 } from '../../core/infrastructure/components/galeries/gallery3/ImagesGallery'
import { ImagesGalery4 } from '../../core/infrastructure/components/galeries/gallery4/ImagesGallery'
import { ImagesGalery5 } from '../../core/infrastructure/components/galeries/gallery5/ImagesGallery'
import { ImagesGalery6 } from '../../core/infrastructure/components/galeries/gallery6/ImagesGallery'
import { ImagesGalery7 } from '../../core/infrastructure/components/galeries/gallery7/ImagesGallery'

export const Gallery = () => {
  return (
    <>
      <h2>Gallery</h2>
      <div className='container' style={{background:"rgba(255,255,255, 0.2)", borderRadius:"20px 20px 20px 20px"}}>
      <br/><ImagesGalery6/> <br/><ImagesGalery2/><br/><ImagesGalery5/><br/><ImagesGalery4/><br/><ImagesGalery3/><br/><ImagesGalery7/> <br/>
      </div>
      <div style={{display:"flex", flexDirection:"column"}}> 
        <div style={{justifyContent:"center", alignItems:"center"}}>
          {/* <Slider/> */}
        </div>
      </div>

    </>
  )
}
