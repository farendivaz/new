import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import KumpulanCerita from '../components/news/KumpulanCerita'
import KumpulanGaleri from '../components/news/KumpulanGaleri'
import KumpulanVideo from '../components/news/KumpulanVideo'

const News = () => {
    return (
        <>
        <NavBar />
            <KumpulanCerita/>
            {/* <KumpulanGaleri/> */}
            {/* <KumpulanVideo/> */}
            <Footer/>
        </>
    )
}

export default News