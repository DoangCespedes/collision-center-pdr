import ReactPlayer from 'react-player';


const MediaPlayer = () => {
  return (
    <>
      
        <div className='container bg-dark text-center text-white'>
          <div className='container'>
            <h2>Repairs Captured on Video</h2>
          </div>
          <p>Explore our videos showcasing remarkable improvements in our valued customers' vehicles. Witness the transformation they undergo, seeing both the previous state and the end result. We also invite you to follow us on our YouTube channel to stay updated on our latest updates.</p>
            <div className="row text-black justify-content-around mt-4">
              <div className='container mt-2 mb-2'>
                <h2>AFTER</h2>
              </div>
              <ReactPlayer url='https://youtu.be/lNP1w3Nkn3c'/>
              <div className='container mt-2 mb-2 text-white'>
                <h2>BEFORE</h2>
              </div>
              <ReactPlayer url='https://youtu.be/l7cGsJqQEXQ'/>
              <hr/>
              <div className='container mt-2 mb-2'>
                <h2>AFTER</h2>
              </div>
              <ReactPlayer url='https://youtu.be/0CMlEbo55aA'/>
              <hr/>
              <div className='container mt-2 mb-2 text-white'>
                <h2>BEFORE</h2>
              </div>
              <ReactPlayer url='https://youtu.be/dwpymxWgT_I'/>
              <hr/>
              <div className='container mt-2 mb-2'>
                <h2>AFTER</h2>
              </div>
              <ReactPlayer url='https://youtube.com/shorts/A3dNRt0BRKg?feature=share'/>
              <hr/>
              <div className='container mt-2 mb-2 text-white'>
                <h2>BEFORE</h2>
              </div>
              <ReactPlayer url='https://youtube.com/shorts/LfVRboQugHM?feature=share'/>
            </div>
          
        </div>
        
        
    </>
  )
}

export default MediaPlayer