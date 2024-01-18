import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/swiper.css';
import '../../index.css';

export default function Sorotan() {
    return (
        <>
            <section className='sorotan'>
                <div className='mx-20 mt-20 mb-10'>
                    <h1 className="my-8 text-2xl font-bold text-center md:text-3xl lg:text-3xl xl:text-4xl text-primary-100">
                        Sorotan Media
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
                        navigation={false}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="flex gap-8 bg-neutral-400">
                                <div className='w-3/5 pb-8'>
                                    <img className="rounded-2xl" src="/public/tim/carousel1.jpg" alt="Image Milestone Cover" />
                                </div>
                                <div className="w-2/5 flex flex-col justify-center mt-5 ql-editor">
                                    <p className="pb-4 font-semibold text-center md:text-lg lg:text-left xl:text-lg">
                                        31 Januari 2024
                                    </p>
                                    <h2 className="pb-4 font-semibold text-center md:text-3xl lg:text-left xl:text-3xl">
                                        Layanan Kesehatan Digital Ter2 untuk Indonesia Sehat
                                    </h2>
                                    <p className="mx-auto text-base text-left xl:block">
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
                            <div className="flex gap-8 bg-neutral-400">
                                <div className='w-3/5 pb-8'>
                                    <img className="rounded-2xl" src="/public/tim/carousel1.jpg" alt="Image Milestone Cover" />
                                </div>
                                <div className="w-2/5 flex flex-col justify-center mt-5 ql-editor">
                                    <p className="pb-4 font-semibold text-center md:text-lg lg:text-left xl:text-lg">
                                        31 Januari 2024
                                    </p>
                                    <h2 className="pb-4 font-semibold text-center md:text-3xl lg:text-left xl:text-3xl">
                                        Layanan Kesehatan Digital Ter2 untuk Indonesia Sehat
                                    </h2>
                                    <p className="mx-auto text-base text-left xl:block">
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
                            <div className="flex gap-8 bg-neutral-400">
                                <div className='w-3/5'>
                                    <img className="rounded-2xl" src="/public/tim/carousel1.jpg" alt="Image Milestone Cover" />
                                </div>
                                <div className="w-2/5 flex flex-col justify-center mt-5 ql-editor">
                                    <p className="pb-4 font-semibold text-center md:text-lg lg:text-left xl:text-lg">
                                        31 Januari 2024
                                    </p>
                                    <h2 className="pb-4 font-semibold text-center md:text-3xl lg:text-left xl:text-3xl">
                                        Layanan Kesehatan Digital Ter2 untuk Indonesia Sehat
                                    </h2>
                                    <p className="mx-auto text-base text-left xl:block">
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
            </section>

            <section>
                <div className="flex mx-20  gap-20">
                    <div className="w-1/2">
                        <h1 className="text-2xl mt-2 mb-4 font-semibold text-center md:text-3xl lg:text-3xl xl:text-4xl text-primary-100">
                            Sorotan Media
                        </h1>
                        <img src="/public/banner.jpg" alt="Banner Image" className="w-full"></img>
                        <h1 className="text-2xl m-2 font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
                            Judul Galeri
                        </h1>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-2xl mt-2 mb-4 font-semibold text-center md:text-3xl lg:text-3xl xl:text-4xl text-primary-100">
                            Sorotan Media
                        </h1>
                        <img src="/public/banner.jpg" alt="Banner Image" className="w-full"></img>
                        <h1 className="text-2xl m-2 font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
                            Judul Video
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
}
