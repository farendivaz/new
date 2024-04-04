import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/swiper.css";
import "../../index.css";
import { Link } from "react-router-dom";

const Sorotan = () => {
  return (
    <>
      <section className="sorotan">
        <div className="mx-28 mt-24 mb-6">
          <h1 className="text-2xl mb-8 font-semibold text-center md:text-3xl lg:text-3xl xl:text-4xl">
            Berita!
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
              <div className="flex gap-8">
                <div className="w-3/5 pb-8">
                  <img
                    className="rounded-2xl"
                    src="https://demo.fitaja.id//storage/articles/9QxG86oN29T3JUxiEHdetOer1IeqvQmzPYYAKnxj.jpg"
                    alt="Image Milestone Cover"
                  />
                </div>
                <div className="w-2/5 flex flex-col justify-center my-auto ql-editor">
                  <p className="pb-4 font-semibold text-center md:text-lg lg:text-left xl:text-lg">
                    08 Maret 2024
                  </p>
                  <h2 className="pb-4 font-semibold text-center md:text-3xl lg:text-left xl:text-3xl">
                    Berkolaborasi dalam Inovasi, FitAja! dan Good Doctor..
                  </h2>
                  <p className="mx-auto text-base text-left xl:block">
                    Pada Kamis, 7 Maret 2024, Artotel Suites Mangkuluhur menjadi
                    saksi sebuah pertemuan yang sangat bermakna dalam ranah
                    digital healthcare di Indonesia. MDI Ventures mengundang
                    para pelaku industri dan penggiat teknologi dari sektor
                    kesehatan dalam sebuah event bertajuk EXPLORISE 2024 MDI
                    Ventures Chapter I..
                  </p>
                  <Link to={"/berkolaborasi"} className="mt-4 text-left">
                    <a
                      data-modal="modal-2"
                      className="px-8 py-1 mx-auto my-5 font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                    >
                      Selengkapnya
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-8">
                <div className="w-3/5">
                  <img
                    className="rounded-2xl"
                    src="/public/berita/penandatanganan.png"
                    alt="Image Milestone Cover"
                  />
                </div>
                <div className="w-2/5 flex flex-col justify-center my-auto ql-editor">
                  <p className="pb-4 font-semibold text-center md:text-lg lg:text-left xl:text-lg">
                    13 Oktober 2023
                  </p>
                  <h2 className="pb-4 font-semibold text-center md:text-3xl lg:text-left xl:text-3xl">
                    Penandatangan MoU FitAja x IFG Life: Buka Akses Produk
                    Asuransi IFG Life di FitAja!..
                  </h2>
                  <p className="mx-auto text-base text-left xl:block">
                    FitAja! bersama IFG Life berkolaborasi untuk melihat potensi
                    masing-masing pihak dalam upaya meningkatkan akses layanan
                    kesehatan melalui aplikasi FitAja!. Kolaborasi ini
                    diresmikan dengan penandatanganan MoU (Memorandum of
                    Understanding) pada Jum’at, 13 Oktober 2023..
                  </p>
                  <Link to={"/penandatanganan"} className="mt-4 text-left">
                    <a
                      data-modal="modal-2"
                      className="px-8 py-1 mx-auto my-5 font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                    >
                      Selengkapnya
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-8">
                <div className="w-3/5 pb-8">
                  <img
                    className="rounded-2xl"
                    src="/public/berita/kolaborasi.png"
                    alt="Image Milestone Cover"
                  />
                </div>
                <div className="w-2/5 flex flex-col justify-center my-auto ql-editor justify-items-center">
                  <p className="pb-4 font-semibold text-center md:text-lg lg:text-left xl:text-lg">
                    08 Oktober 2023
                  </p>
                  <h2 className="pb-4 font-semibold text-center md:text-3xl lg:text-left xl:text-3xl">
                    Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval 2023..
                  </h2>
                  <p className="mx-auto text-base text-left xl:block">
                    Sebuah pemandangan baru di kantor FitAja!, semua karyawan
                    kompak memakai baju Batik dalam rangka peringatan Hari Batik
                    Nasional pada Senin, 2 Oktober 2023. Walaupun tidak ada
                    kegiatan khusus untuk ini, namun semuanya antusias menyambut
                    Hari Batik Nasional, dan tampil lebih percaya diri dengan
                    memakai batik..
                  </p>
                  <Link to={"/kolaborasi"} className="mt-4 text-left">
                    <a
                      data-modal="modal-2"
                      className="px-8 py-1 my-5 font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                    >
                      Selengkapnya
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Sorotan;
