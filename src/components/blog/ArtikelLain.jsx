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
import { Pagination, Navigation } from 'swiper/modules';

export default function ArtikelLain() {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 6; // Menambah 3 konten default di akhir
    let prependNumber = -3; // Menambah 3 konten default di awal

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                loop={true} // Aktifkan looping
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                initialSlide={0}
            >
                <SwiperSlide>
                    <div className="relative bg-neutral-400 flex items-center justify-center swiper-slide">
                        <a className="flex items-center justify-center w-full py-2" href="https://demo.fitaja.id/cerita-fitaja/berita/kolaborasi-seru-fitaja-dan-mci-di-mandiri-karnaval-2023-20231219164210">
                            <article
                                className="w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 flex flex-col group items-center justify-between py-6 px-8 gap-2 rounded-2xl hover:ring-2 hover:ring-primary-200 bg-white  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                                <img className="w-full aspect-video object-cover rounded-tl-[64px] h-2/5 rounded-br-[64px] rounded-bl-xl rounded-tr-xl"
                                    src="https://demo.fitaja.id//storage/articles/3kOf1AInozxp87RiiVzZ8iLaostuKOo2ceZzwZYz.jpg" alt="Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval 2023"></img>
                                <p
                                    className="self-start text-sm font-semibold text-left text-neutral-200 font-roboto group-hover:underline group-hover:text-primary-200">
                                    07 Desember 2023
                                </p>
                                <div className="flex items-center justify-center h-24">

                                    <h1
                                        className="text-lg font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200">
                                        Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval...
                                    </h1>
                                </div>
                                <div className="flex h-2/5">
                                    <p className="hidden text-base text-left font-roboto text-neutral-300 lg:block">
                                        Mandiri karnaval, puncak perayaan ulang tahun Bank Mandiri yang ke-25 diselenggarakan pada tanggal 7 – 8 Oktober 2023 di Area Parkir Timur Gelora Bung...
                                    </p>
                                    <p className="text-base text-left font-roboto text-neutral-300 lg:hidden">
                                        Mandiri karnaval, puncak perayaan ulang tahun Bank Mandiri yang ke-25 diselengga...
                                    </p>
                                </div>
                            </article>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative bg-neutral-400 flex items-center justify-center swiper-slide">
                        <a className="flex items-center justify-center w-full py-2" href="https://demo.fitaja.id/cerita-fitaja/berita/kolaborasi-seru-fitaja-dan-mci-di-mandiri-karnaval-2023-20231219164210">
                            <article
                                className="w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 flex flex-col group items-center justify-between py-6 px-8 gap-2 rounded-2xl hover:ring-2 hover:ring-primary-200 bg-white  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                                <img className="w-full aspect-video object-cover rounded-tl-[64px] h-2/5 rounded-br-[64px] rounded-bl-xl rounded-tr-xl"
                                    src="https://demo.fitaja.id//storage/articles/3kOf1AInozxp87RiiVzZ8iLaostuKOo2ceZzwZYz.jpg" alt="Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval 2023"></img>
                                <p
                                    className="self-start text-sm font-semibold text-left text-neutral-200 font-roboto group-hover:underline group-hover:text-primary-200">
                                    07 Desember 2023
                                </p>
                                <div className="flex items-center justify-center h-24">

                                    <h1
                                        className="text-lg font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200">
                                        Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval...
                                    </h1>
                                </div>
                                <div className="flex h-2/5">
                                    <p className="hidden text-base text-left font-roboto text-neutral-300 lg:block">
                                        Mandiri karnaval, puncak perayaan ulang tahun Bank Mandiri yang ke-25 diselenggarakan pada tanggal 7 – 8 Oktober 2023 di Area Parkir Timur Gelora Bung...
                                    </p>
                                    <p className="text-base text-left font-roboto text-neutral-300 lg:hidden">
                                        Mandiri karnaval, puncak perayaan ulang tahun Bank Mandiri yang ke-25 diselengga...
                                    </p>
                                </div>
                            </article>
                        </a>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="relative bg-neutral-400 flex items-center justify-center swiper-slide">
                        <a className="flex items-center justify-center w-full py-2" href="https://demo.fitaja.id/cerita-fitaja/berita/kolaborasi-seru-fitaja-dan-mci-di-mandiri-karnaval-2023-20231219164210">
                            <article
                                className="w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 flex flex-col group items-center justify-between py-6 px-8 gap-2 rounded-2xl hover:ring-2 hover:ring-primary-200 bg-white  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                                <img className="w-full aspect-video object-cover rounded-tl-[64px] h-2/5 rounded-br-[64px] rounded-bl-xl rounded-tr-xl"
                                    src="https://demo.fitaja.id//storage/articles/3kOf1AInozxp87RiiVzZ8iLaostuKOo2ceZzwZYz.jpg" alt="Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval 2023"></img>
                                <p
                                    className="self-start text-sm font-semibold text-left text-neutral-200 font-roboto group-hover:underline group-hover:text-primary-200">
                                    07 Desember 2023
                                </p>
                                <div className="flex items-center justify-center h-24">

                                    <h1
                                        className="text-lg font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200">
                                        Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval...
                                    </h1>
                                </div>
                                <div className="flex h-2/5">
                                    <p className="hidden text-base text-left font-roboto text-neutral-300 lg:block">
                                        Mandiri karnaval, puncak perayaan ulang tahun Bank Mandiri yang ke-25 diselenggarakan pada tanggal 7 – 8 Oktober 2023 di Area Parkir Timur Gelora Bung...
                                    </p>
                                    <p className="text-base text-left font-roboto text-neutral-300 lg:hidden">
                                        Mandiri karnaval, puncak perayaan ulang tahun Bank Mandiri yang ke-25 diselengga...
                                    </p>
                                </div>
                            </article>
                        </a>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="relative bg-neutral-400 flex items-center justify-center swiper-slide">
                        <a className="flex items-center justify-center w-full py-2" href="https://demo.fitaja.id/cerita-fitaja/berita/kolaborasi-seru-fitaja-dan-mci-di-mandiri-karnaval-2023-20231219164210">
                            <article
                                className="w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 flex flex-col group items-center justify-between py-6 px-8 gap-2 rounded-2xl hover:ring-2 hover:ring-primary-200 bg-white  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                                <img className="w-full aspect-video object-cover rounded-tl-[64px] h-2/5 rounded-br-[64px] rounded-bl-xl rounded-tr-xl"
                                    src="https://demo.fitaja.id//storage/articles/3kOf1AInozxp87RiiVzZ8iLaostuKOo2ceZzwZYz.jpg" alt="Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval 2023"></img>
                                <p
                                    className="self-start text-sm font-semibold text-left text-neutral-200 font-roboto group-hover:underline group-hover:text-primary-200">
                                    07 Desember 2023
                                </p>
                                <div className="flex items-center justify-center h-24">

                                    <h1
                                        className="text-lg font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200">
                                        Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval...
                                    </h1>
                                </div>
                                <div className="flex h-2/5">
                                    <p className="hidden text-base text-left font-roboto text-neutral-300 lg:block">
                                        Mandiri karnaval, puncak perayaan ulang tahun Bank Mandiri yang ke-25 diselenggarakan pada tanggal 7 – 8 Oktober 2023 di Area Parkir Timur Gelora Bung...
                                    </p>
                                    <p className="text-base text-left font-roboto text-neutral-300 lg:hidden">
                                        Mandiri karnaval, puncak perayaan ulang tahun Bank Mandiri yang ke-25 diselengga...
                                    </p>
                                </div>
                            </article>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    );
}
