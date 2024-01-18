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

export default function Milestone() {
    return (
        <>
            <section className='milestone'>
                <div className='m-5'>
                    <div className="rounded-3xl h-full p-8 w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-white overflow-hidden">
                        <h1 className="my-8 text-2xl font-bold text-center md:text-3xl lg:text-3xl xl:text-4xl text-primary-100">
                            Milestones Perusahaan
                        </h1>
                        
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                            <div id="mySwiper"
                            className="flex flex-row m-4 items-center justify-center w-11/12 mx-auto cursor-pointer swiperMilestoneYear">
                            <div className="swiper-wrapper">
                                <h1 className="mx-auto font-bold text-center text-secondary1-200 name swiper-slide">
                                    2021
                                </h1>
                                <h1 className="mx-auto font-bold text-center text-secondary1-200 name swiper-slide">
                                    2022
                                </h1>
                                <h1 className="mx-auto font-bold text-center text-secondary1-200 name swiper-slide">
                                    2023
                                </h1>
                            </div>
                        </div>
                                <div className="flex gap-8 mx-12">
                                    <div className='w-3/5'>
                                        <img className="rounded-2xl" src="/public/tim/carousel1.jpg" alt="Image Milestone Cover" />
                                    </div>
                                    <div className="w-2/5 flex flex-col items-center justify-center my-auto mx-auto mt-5 place-items-center ql-editor">
                                        <p className="hidden mx-auto text-base text-justify xl:block">
                                            Peluncuran Aplikasi FitAja! oleh KBUMN Pada Jumat, 23 Juli 2021 telah dilakukan penandatangan MOU kerja sama pengembangan aplikasi FitAja! oleh 8 perusahaan BUMN yang bergerak di bidang ekosistem kesehatan, dan dilanjutkan dengan...
                                        </p>
                                        <a
                                            data-modal="modal-2"
                                            className="px-8 py-1 mx-auto my-5 font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                                        >
                                            Selengkapnya
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div id="mySwiper"
                            className="flex flex-row m-4 items-center justify-center w-11/12 mx-auto cursor-pointer swiperMilestoneYear">
                            <div className="swiper-wrapper">
                                <h1 className="mx-auto font-bold text-center text-secondary1-200 name swiper-slide">
                                    2021
                                </h1>
                                <h1 className="mx-auto font-bold text-center text-secondary1-200 name swiper-slide">
                                    2022
                                </h1>
                                <h1 className="mx-auto font-bold text-center text-secondary1-200 name swiper-slide">
                                    2023
                                </h1>
                            </div>
                        </div>
                                <div className="flex gap-8 mx-12">
                                    <div className='w-3/5'>
                                        <img className="rounded-2xl" src="/public/tim/carousel1.jpg" alt="Image Milestone Cover" />
                                    </div>
                                    <div className="w-2/5 flex flex-col items-center justify-center my-auto mx-auto mt-5 place-items-center ql-editor">
                                        <p className="hidden mx-auto text-base text-justify xl:block">
                                            Peluncuran Aplikasi FitAja! oleh KBUMN Pada Jumat, 23 Juli 2021 telah dilakukan penandatangan MOU kerja sama pengembangan aplikasi FitAja! oleh 8 perusahaan BUMN yang bergerak di bidang ekosistem kesehatan, dan dilanjutkan dengan...
                                        </p>
                                        <a
                                            data-modal="modal-2"
                                            className="px-8 py-1 mx-auto my-5 font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                                        >
                                            Selengkapnya
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}
