
import { Route, Routes } from 'react-router-dom'
import { Gallery } from '../views/gallery/Gallery'
import { Contact } from '../views/contact/Contact'
import { Home } from '../views/home/Home'
import { Detailing } from '../views/work/Detailing/Detailing'
import { PDR } from '../views/work/PDR/PDR'
import Collision from '../views/work/collision/Collision'
import DoorDing from '../views/work/doorDing/DoorDing'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />


        <Route path="/pdr" element={<PDR/>} />
        <Route path="/door_ding" element={<DoorDing/>} />
        <Route path="/collision" element={<Collision/>} />
        <Route path="/detailing" element={<Detailing/>} />


    </Routes>
  )
}

export default AppRouter