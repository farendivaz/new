import React from 'react'
import NavBar from '../components/NavBar'
import SyaratKetentuan from '../components/syarat/SyaratKetentuan'
import Footer from '../components/Footer'

const Syarat = () => {
  return (
    <>
        <NavBar/>
        <div className="relative">
        <img src="/public/page/frame.png" className="w-full mt-16 shadow-lg" alt="Frame Image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white font-semibold">
          <h2 className="text-[50px] font-bold text-primary-200">Syarat & Ketentuan</h2>
        </div>
      </div>
        <SyaratKetentuan/>
        <Footer/>
    </>
  )
}

export default Syarat