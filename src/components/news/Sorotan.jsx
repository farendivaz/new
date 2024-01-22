import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/swiper.css';
import '../../index.css';


const Sorotan = () => {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <section className='sorotan'>
                <div className='mx-20 mt-24 mb-10'>
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
                    <div className="w-1/2 group">
                        <h1 className="text-2xl mt-2 mb-4 font-semibold text-center md:text-3xl lg:text-3xl xl:text-4xl text-primary-100">
                            Sorotan Galeri!
                        </h1>
                        <img src="/public/banner.jpg" alt="Banner Image" className="w-full rounded-2xl group-hover:opacity-80"></img>
                        <h1 className="group-hover:underline group-hover:text-primary-200 hover:text-primary-200 text-2xl m-2 font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
                            Judul Galeri
                        </h1>
                    </div>
                    <div className="w-1/2 group">
                        <h1 className="text-2xl mt-2 mb-4 font-semibold text-center md:text-3xl lg:text-3xl xl:text-4xl text-primary-100">
                            Sorotan Video!
                        </h1>
                        <div className="relative aspect-video w-full group-hover:opacity-80">
                            <img
                                className=" aspect-video w-full rounded-2xl"
                                onClick={openModal}
                                src="https://img.youtube.com/vi/4UZrsTqkcW4/maxresdefault.jpg"
                                alt="Youtube Thumbnail"
                            />
                            <img
                                onClick={openModal}
                                className="absolute inset-0 flex items-center justify-center m-auto w-16 border-white"
                                src="/public/play.png"
                                alt="Play Button"
                            />
                        </div>
                        <h1 className="group-hover:underline group-hover:text-primary-200 hover:text-primary-200 text-2xl m-2 font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
                            Judul Video
                        </h1>
                    </div>
                    {modal ? (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75">
                            <div className="rounded">
                                <div className="relative">
                                    <h1
                                        onClick={openModal}
                                        className="absolute top-0 border text-xl bg-white border-white rounded-full p-1 -right-10 text-gray-800 cursor-pointer"
                                    >
                                        ❌
                                    </h1>
                                    <iframe
                                        loading="lazy"
                                        width="800"
                                        height="500"
                                        src="https://www.youtube.com/embed/4UZrsTqkcW4"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </section>
        </>
    );
}

export default Sorotan
