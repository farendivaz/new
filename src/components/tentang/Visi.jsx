import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/swiper.css';
import '../../index.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Visi() {
  return (
    <>
      <section className='h-60 m-5 mb-8'>
        <div className="rounded-3xl h-full p-6 mx-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-white overflow-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col h-full items-center justify-center mx-auto lg:w-full lg:h-full">
                <h1 className="mb-1 text-2xl font-bold text-primary-100 md:text-3xl xl:text-4xl 2xl:text-4xl">
                  Visi
                </h1>
                <p className="w-2/3 my-4 text-lg text-center text-primary-300 lg:text-2xl xl:text-xl">
                  Menjadi mitra utama dalam layanan kesehatan digital di Indonesia.
                </p>
              </div>

            </SwiperSlide>
            <SwiperSlide>

              <div className="flex flex-col items-center justify-center mx-auto lg:w-full lg:h-full">
                <h1 className="mb-1 mt-1 text-2xl font-bold text-primary-100 md:text-3xl xl:text-4xl 2xl:text-4xl">
                  Misi
                </h1>
                <p className="w-2/3 my-4 text-lg text-center text-primary-300 lg:text-2xl xl:text-xl">
                  Menyediakan layanan kesehatan digital yang terintegrasi, nyaman dan terjangkau.
                  Pemerataan layanan kesehatan yang terstandarisasi serta meningkatkan efisiensi dalam
                  Industri Kesehatan.
                </p>
              </div>

            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
