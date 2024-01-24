import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Carouseltim() {
    return (
        <div className='fitur mt-20 bg-neutral-500'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper aspect-video w-full rounded-3xl bg-black"
            >
                <SwiperSlide>
                    <section className='h-full w-full'>
                        <img className='rounded-3xl' src='/public/tim/carousel5.jpg' alt="Carousel Image 1" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='h-full w-full'>
                        <img className='rounded-3xl' src='/public/tim/carousel2.jpg' alt="Carousel Image 2" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='h-full w-full'>
                        <img className='rounded-3xl' src='/public/tim/carousel3.jpg' alt="Carousel Image 3" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='h-full w-full'>
                        <img className='rounded-3xl' src='/public/tim/carousel4.jpg' alt="Carousel Image 4" />
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
