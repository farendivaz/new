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
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carouseltim() {
    return (
        <div className='mt-20 bg-neutral-500' >
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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section className='h-full w-full m-5 '>
                        <img className='rounded-3xl' src='/public/tim/carousel5.jpg'></img>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='h-full w-full m-5 '>
                        <img className='rounded-3xl' src='/public/tim/carousel2.jpg'></img>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='h-full w-full m-5 '>
                        <img className='rounded-3xl' src='/public/tim/carousel3.jpg'></img>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='h-full w-full m-5 '>
                        <img className='rounded-3xl' src='/public/tim/carousel4.jpg'></img>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
