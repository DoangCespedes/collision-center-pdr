
import { Helmet } from 'react-helmet'
import AppRouter from '../../../router/AppRouter'
// import { Nav } from '../components/navbar/Nav'
import Footer from '../components/footer/Footer'
import { NavSeedDial } from '../components/navSpeedDial/NavSeedDial'
import Appbar from '../components/navbar/Appbar'


const App = () => {
  return (
    <>
      <Helmet>
        <title>Collision Center & PDR</title> 
      </Helmet>
        <Appbar/>
      <AppRouter/>
      <NavSeedDial/>
      <Footer/>
    </>
  )
}

export default App