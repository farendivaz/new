import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/swiper.css';
import '../../index.css';
import ArtikelGaleriMerangkul from './ArtikelGaleriMerangkul';
import ArtikelGaleriTampilBeda from './ArtikelGaleriTampilBeda';
import ArtikelGaleriPenandatanganan from './ArtikelGaleriPenandatanganan';

const GaleriLainnya = () => {
    return (
        <div className='py-10'>
            <h1 data-aos="fade-up" data-aos-delay="250" className="text-3xl font-semibold px-20">
                Galeri Lainnya
            </h1>
            <div className="relative flex flex-col items-center justify-center w-full overflow-hidden px-24 mb-6">
                <section className="w-full mt-6 gap-10 lg:w-full overflow-hidden box-content">
                    <div className="flex"> 
                        <ArtikelGaleriPenandatanganan/>
                        <ArtikelGaleriMerangkul/>
                        <ArtikelGaleriTampilBeda/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default GaleriLainnya;
