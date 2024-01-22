import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Artikel from '../components/blog/Artikel'
import ArtikelLainnya from '../components/blog/ArtikelLainnya'

const Blog = () => {
  return (
    <>
        <NavBar />
        <Artikel />
        <ArtikelLainnya/>
        <Footer />
    </>
  )
}

export default Blog