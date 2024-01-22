import React from 'react'

function Artikel() {
    return (
        <>
            <section id="container" className="w-full lg:py-2.5 flex-col mt-5 items-center gap-12 flex">
                <div className="w-full pt-8 sm:pt-10 lg:pt-8 flex-col justify-center items-center gap-2.5 flex">

                    <div className="flex-col justify-start items-start gap-3.5 flex md:w-2/3 w-full px-[30px] md:px-0">
                        <div className="self-stretch lg:py-6 flex-col justify-start items-start gap-2.5 flex text-neutral-100">
                            <h1 className="self-stretch font-semibold text-2xl sm:text-3xl lg:text-5xl break-words leading-6 lg:leading-[62.40px]">
                                Kolaborasi Seru Perusahaan PT. X bersama Mitra Perusahaan
                            </h1>
                            <div className="self-stretch text-base font-semibold leading-relaxed sm:text-xl font-roboto">
                                Kategori: Karir
                            </div>

                            <div className="hidden self-stretch text-xs min-[460px]:block sm:text-base lg:text-lg font-normal leading-normal text-right font-roboto">
                                07 Desember 2023
                            </div>
                            <div className="w-full">
                                <div className="aspect-video">
                                    <div className="flex justify-center w-full h-full">
                                        <img
                                            className="object-contain rounded-2xl"
                                            src="https://demo.fitaja.id//storage/articles/3kOf1AInozxp87RiiVzZ8iLaostuKOo2ceZzwZYz.jpg"
                                            alt="Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval 2023"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="self-stretch min-[460px]:hidden text-xs sm:text-sm lg:text-lg mt-1 font-normal leading-normal text-right font-roboto">
                                07 Desember 2023
                            </div>

                            <p className="self-stretch mt-4 text-lg font-normal leading-normal text-justify font-roboto">
                                Dalam artikel ini, kita akan menjelajahi perincian kolaborasi yang menarik antara PT. X dan mitra perusahaan, membahas tujuan bersama, pencapaian yang dicapai, dan dampak positifnya. Kami juga akan membahas bagaimana kolaborasi ini menciptakan peluang baru dalam industri karir, memberikan wawasan mendalam tentang momen-momen kunci selama acara tersebut.
                            </p>
                            <p className="self-stretch mt-4 text-lg font-normal leading-normal text-justify font-roboto">
                                Mandiri karnaval, puncak perayaan ulang tahun Bank Mandiri yang ke-25 diselenggarakan pada tanggal 7 – 8 Oktober 2023 di Area Parkir Timur Gelora Bung Karno. Dimeriahkan oleh live music performance, food festival, dan beauty, Fashion & Craft Festival.
                            </p>
                            <p className="self-stretch mt-4 text-lg font-normal leading-normal text-justify font-roboto">
                                Pada acara ini, Mandiri Capital mengajak FitAja!, LinkAja, Cakap, dan Amartha untuk berkolaborasi dengan mengisi kegiatan di booth MCI. FitAja! sebagai perusahaan yang bergerak di bidang digital health tech menghadirkan penilaian kesehatan dan ketahanan mental gratis yang didukung oleh Naluri, dan membuka pemesanan home care body massage & reflexy, dan IV Therapy yang didukung oleh Lemihealth melalui aplikasi FitAja!. Selain itu, guna meningkatkan pelayanan di aplikasi, FitAja! melakukan survei pengalaman pengguna serta membagikan hadiah menarik bagi peserta yang berkunjung dan mengikuti challenge dari FitAja!.
                            </p>
                            <p className="self-stretch mt-4 text-lg font-normal leading-normal text-justify font-roboto">
                                Bagi FitAja!, kegiatan ini merupakan suatu kesempatan untuk berkolaborasi dengan perusahaan-perusahaan hebat, juga momentum untuk meningkatkan brand awareness aplikasi FitAja! di masyarakat umum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Artikel