import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Gallery } from '../views/gallery/Gallery'
import { Contact } from '../views/contact/Contact'
import { Home } from '../views/home/Home'
import { AutoDetailing } from '../views/work/AutoDetailing/AutoDetailing'
import { HailDentRepair } from '../views/work/HailDentRepair/HailDentRepair'
import { PaintCorrections } from '../views/work/PaintCorrections/PaintCorrections'
import { VehicleRestoration } from '../views/work/VehicleRestoration/VehicleRestoration'
import { WindowTinting } from '../views/work/WindowTinting/WindowTinting'
import { CeramicCoatings } from '../views/work/CeramicCoatings/CeramicCoatings'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/about" element={<About/>} /> */}
        <Route path="/auto-detailing" element={<AutoDetailing/>} />
        <Route path="/ceramic-coatings" element={<CeramicCoatings/>} />
        <Route path="/hail-dent-repair" element={<HailDentRepair/>} />
        <Route path="/paint-corrections" element={<PaintCorrections/>} />
        <Route path="/vehicle-restoration" element={<VehicleRestoration/>} />
        <Route path="/window-tinting" element={<WindowTinting/>} />
    </Routes>
  )
}

export default AppRouter