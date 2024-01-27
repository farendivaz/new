import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/swiper.css";
import "../../index.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function SwiperPopUp () {

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="swiper-wrapper">
            <div className="flex flex-col justify-center swiper-slide">
              <div className="flex justify-center md:mx-16 lg:mx-16 md:h-3/4 lg:h-3/4">
                <img
                  className="object-contain w-full h-full aspect-video"
                  src="/public/tim/carousel1.jpg"
                />
              </div>
              <p className="mt-3 break-words overflow-hidden text-base text-center md:text-2xl lg:text-2xl md:mt-8 lg:mt-8 text-primary-100">
                testing image
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-wrapper">
            <div className="flex flex-col justify-center swiper-slide">
              <div className="flex justify-center md:mx-16 lg:mx-16 md:h-3/4 lg:h-3/4">
                <img
                  className="object-contain w-full h-full aspect-video"
                  src="/public/tim/carousel2.jpg"
                />
              </div>
              <p className="mt-3 break-words overflow-hidden text-base text-center md:text-2xl lg:text-2xl md:mt-8 lg:mt-8 text-primary-100">
                testing image
              </p>
            </div>
          </SwiperSlide>
      </Swiper>
    </>
  );
};

