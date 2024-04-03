import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ArtikelLainnya from '../components/blog/ArtikelLainnya'
import TampilBeda from '../components/berita/TampilBeda'

const Blog = () => {
  return (
    <>
        <NavBar />
        <TampilBeda/>
        <ArtikelLainnya/>
        <Footer />
    </>
  )
}

export default Blog