import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Gallery } from '../views/gallery/Gallery'
import { Contact } from '../views/contact/Contact'
import { Home } from '../views/home/Home'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default AppRouter