import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GaleriLainnya from '../components/galeri/GaleriLainnya'
import GaleriPeresmian from '../components/galeri/GaleriPeresmian'

const Galeri = () => {
  return (
    <div>
        <NavBar/>
        <GaleriPeresmian/>
        <GaleriLainnya/>
        <Footer/>
    </div>
  )
}

export default Galeri