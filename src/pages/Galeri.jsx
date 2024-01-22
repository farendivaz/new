import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Thumbnail from '../components/galeri/Tumbnail'
import GaleriLainnya from '../components/galeri/GaleriLainnya'

const Galeri = () => {
  return (
    <div>
        <NavBar/>
        <Thumbnail/>
        <GaleriLainnya/>
        <Footer/>
    </div>
  )
}

export default Galeri