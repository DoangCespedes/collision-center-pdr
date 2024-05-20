import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

const Slider = () => {

    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];


  return (
    <>
        <div style={{width:"60vw", display:"flex", justifyContent:"center"}}>
            <ImageGallery items={images}x 
                // showPlayButton={false}
                // showFullscreenButton={false}
                // showThumbnails={false}
                // showNav={false}
                // showBullets={false}
                autoPlay={true}
                slideInterval={5000}
                slideDuration={3000}
                // thumbnailPosition='top'
            />
        </div>
    </>
  )
}

export default Slider