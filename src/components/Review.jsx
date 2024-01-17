import { useState } from "react"
import PopUpReview from "./PopUpReview"

const Review = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="relative flex flex-col items-center justify-center w-full overflow-hidden px-7 xl:px-[108px] 2xl:px-[140px] mb-6">
                <section className="box-content w-full py-6 overflow-hidden testimonySwipper md:w-11/12 lg:w-full lg:px-5">
                    <h1 data-aos="fade-up" data-aos-delay="250" className="mb-12 mt-24 text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
                        Review Aplikasi!
                    </h1>
                    <div data-aos="fade-up" data-aos-delay="500" className="flex lg:justify-center lg:items-center swiper-wrapper">
                        <div className="flex rounded-2xl gap-28 bg-transparent items-center justify-center w-fit swiper-slide mx-6">
                             <section className="items-center w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 justify-center mx-auto rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-gradient-to-t from-primary-200 via-primary-300 to-25% to-primary-500">
                                <div className="grid items-center justify-center h-full grid-cols-1 mx-6">
                                    {/* Konten Gambar */}
                                    <div className="flex justify-center">
                                        <div className="w-32 h-32">
                                            <img
                                                className="object-cover w-full h-full md:h-64 lg:h-72 xl:h-80 rounded-full"
                                                src="https://demo.fitaja.id//storage/testimonies/HErLgTk8r1dQltFPCjxeAMgHCzS3AL7RZxx7X84v.jpg"
                                                alt="Review Image"
                                            />
                                        </div>
                                    </div>

                                    {/* Konten Judul */}
                                    <h2 className="text-xl font-semibold mt-4">Judul Review</h2>

                                    {/* Konten Deskripsi */}
                                    <p className="text-sm mt-2">
                                        Deskripsi review aplikasi yang menarik dan informatif. Jelaskan pengalaman atau fitur menarik yang ingin dibagikan.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setShowModal(true);
                                        }}
                                        className="m-auto flex items-center justify-center transition-all duration-300 bg-white border lg:mt-4 lg:px-8 lg:py-1 rounded-2xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white"
                                    >
                                        <span className="text-xs font-semibold lg:text-base font-roboto">Selengkapnya</span>
                                    </button>
                                </div>
                            </section>

                            <section className="items-center w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 justify-center rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-gradient-to-t from-primary-200 via-primary-300 to-25% to-primary-500">
                                <div className="grid items-center justify-center h-full grid-cols-1 mx-6">
                                    {/* Konten Gambar */}
                                    <div className="flex justify-center">
                                        <div className="w-32 h-32">
                                            <img
                                                className="object-cover w-full h-full md:h-64 lg:h-72 xl:h-80 rounded-full"
                                                src="https://demo.fitaja.id//storage/testimonies/HErLgTk8r1dQltFPCjxeAMgHCzS3AL7RZxx7X84v.jpg"
                                                alt="Review Image"
                                            />
                                        </div>
                                    </div>

                                    {/* Konten Judul */}
                                    <h2 className="text-xl font-semibold mt-4">Judul Review</h2>

                                    {/* Konten Deskripsi */}
                                    <p className="text-sm mt-2">
                                        Deskripsi review aplikasi yang menarik dan informatif. Jelaskan pengalaman atau fitur menarik yang ingin dibagikan.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setShowModal(true);
                                        }}
                                        className="m-auto flex items-center justify-center transition-all duration-300 bg-white border lg:mt-4 lg:px-8 lg:py-1 rounded-2xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white"
                                    >
                                        <span className="text-xs font-semibold lg:text-base font-roboto">Selengkapnya</span>
                                    </button>
                                </div>
                            </section>

                            <section className="items-center w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 justify-center rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-gradient-to-t from-primary-200 via-primary-300 to-25% to-primary-500">
                                <div className="grid items-center justify-center h-full grid-cols-1 mx-6">
                                    {/* Konten Gambar */}
                                    <div className="flex justify-center">
                                        <div className="w-32 h-32">
                                            <img
                                                className="object-cover w-full h-full md:h-64 lg:h-72 xl:h-80 rounded-full"
                                                src="https://demo.fitaja.id//storage/testimonies/HErLgTk8r1dQltFPCjxeAMgHCzS3AL7RZxx7X84v.jpg"
                                                alt="Review Image"
                                            />
                                        </div>
                                    </div>

                                    {/* Konten Judul */}
                                    <h2 className="text-xl font-semibold mt-4">Judul Review</h2>

                                    {/* Konten Deskripsi */}
                                    <p className="text-sm mt-2">
                                        Deskripsi review aplikasi yang menarik dan informatif. Jelaskan pengalaman atau fitur menarik yang ingin dibagikan.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setShowModal(true);
                                        }}
                                        className="m-auto flex items-center justify-center transition-all duration-300 bg-white border lg:mt-4 lg:px-8 lg:py-1 rounded-2xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white"
                                    >
                                        <span className="text-xs font-semibold lg:text-base font-roboto">Selengkapnya</span>
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
            <PopUpReview isShow={showModal} isHide={() => setShowModal(false)} />
        </>
    )
}

export default Review