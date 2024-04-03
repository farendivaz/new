import React from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../components/Footer'
import KebijakanPrivasi from '../components/syarat/KebijakanPrivasi'

function Kebijakan() {
  return (
    <>
        <Navbar/>
        <div className="relative">
        <img src="/public/page/frame.png" className="w-full mt-16 shadow-lg" alt="Frame Image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white font-semibold">
          <h2 className="text-[50px] font-bold text-primary-200">Kebijakan Privasi</h2>
        </div>
      </div>
        <KebijakanPrivasi/>
        <Footer/>
    </>
  )
}

export default Kebijakan