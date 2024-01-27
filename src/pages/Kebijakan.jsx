import React from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../components/Footer'
import KebijakanPrivasi from '../components/syarat/KebijakanPrivasi'

function Kebijakan() {
  return (
    <>
        <Navbar/>
        <KebijakanPrivasi/>
        <Footer/>
    </>
  )
}

export default Kebijakan