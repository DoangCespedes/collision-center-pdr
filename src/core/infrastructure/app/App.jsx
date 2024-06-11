import React from 'react'
import { Helmet } from 'react-helmet'
import AppRouter from '../../../router/AppRouter'
import { Header } from '../components/header/Header'
import { Nav } from '../components/navbar/Nav'
import Footer from '../components/footer/Footer'
import { NavSeedDial } from '../components/navSpeedDial/NavSeedDial'


const App = () => {
  return (
    <>
      <Helmet>
        <title>Collision Center & PDR</title> 
      </Helmet>

      <div style={{marginBottom:"14vh"}}>
        <Nav/>
      </div>
      <AppRouter/>
      <NavSeedDial/>
      <Footer/>
    </>
  )
}

export default App