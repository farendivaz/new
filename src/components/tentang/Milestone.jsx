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
        <section className='m-5'>
            <div className="rounded-3xl h-full p-8 w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-white overflow-hidden">
                <h1 className="my-8 text-2xl font-bold text-center md:text-3xl lg:text-3xl xl:text-4xl text-primary-100">
                    Milestones Perusahaan
                </h1>
    
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
                            <div className="flex flex-col items-center justify-center sm:w-auto lg:mb-10 lg:flex-row">
                                <img className="mx-5 rounded-2xl" src="/public/tim/carousel2.jpg" alt="Image Milestone Cover"></img>
                                <div className="flex flex-col items-center justify-center mx-auto mt-5 place-items-center ql-editor">
                                    <p className="hidden mx-auto text-base text-justify xl:block">
                                        Peluncuran Aplikasi FitAja! oleh KBUMN Pada Jumat, 23 Juli 2021 telah dilakukan penandatangan MOU kerja sama pengembangan aplikasi FitAja! oleh 8 perusahaan BUMN yang bergerak di bidang ekosistem kesehatan, dan dilanjutkan dengan...
                                    </p>
                                    <p className="mx-auto text-base text-justify xl:hidden">
                                        Peluncuran Aplikasi FitAja! oleh KBUMN Pada Jumat, 23 Juli 2021 telah dilakukan penandatangan MOU kerja sama pengembangan aplikasi FitAja! oleh 8 peru...
                                    </p>
                                    <a data-modal="modal-2" className="px-8 py-1 mx-auto my-5 font-semibold transition-all duration-300 bg-white border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer">
                                        Selengkapnya
                                    </a>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className="flex flex-col items-center justify-center mx-auto sm:w-10/12 lg:mb-10 lg:flex-row">
                                <img className="mx-5 rounded-2xl w-1/2 h-1/2" src="/public/tim/carousel1.jpg" alt="Image Milestone Cover"></img>
                                <div className="flex flex-col items-center justify-center w-1/2 mx-auto mt-5 place-items-center ql-editor">
                                    <p className="hidden mx-auto text-base text-justify xl:block">
                                        Peluncuran Aplikasi FitAja! oleh KBUMN Pada Jumat, 23 Juli 2021 telah dilakukan penandatangan MOU kerja sama pengembangan aplikasi FitAja! oleh 8 perusahaan BUMN yang bergerak di bidang ekosistem kesehatan, dan dilanjutkan dengan...
                                    </p>
                                    <p className="mx-auto text-base text-justify xl:hidden">
                                        Peluncuran Aplikasi FitAja! oleh KBUMN Pada Jumat, 23 Juli 2021 telah dilakukan penandatangan MOU kerja sama pengembangan aplikasi FitAja! oleh 8 peru...
                                    </p>
                                    <a data-modal="modal-2" className="px-8 py-1 mx-auto my-5 font-semibold transition-all duration-300 bg-white border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer">
                                        Selengkapnya
                                    </a>
                                </div>
                            </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
    );
}
