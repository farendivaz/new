import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Artikel from '../components/blog/Artikel'
import ArtikelLain from '../components/blog/ArtikelLain'

const Blog = () => {
  return (
    <>
        <NavBar />
        <Artikel />
        <ArtikelLain />
        <Footer />
    </>
  )
}

export default Blog