import React from 'react'

const Thumbnail = () => {
    return (
        <>
            <section id="container" className="w-full lg:py-2.5 flex-col mt-5 items-center gap-12 flex">
                <div className="w-full pt-8 sm:pt-10 lg:pt-8 flex-col justify-center items-center gap-2.5 flex">

                    <div className="flex-col justify-start items-start gap-3.5 flex md:w-2/3 w-full px-[30px] md:px-0">
                        <div className="self-stretch lg:py-6 flex-col justify-start items-start gap-2.5 flex text-neutral-100">
                            <h1 className="self-stretch font-semibold pb-4 text-2xl sm:text-3xl lg:text-5xl break-words leading-6 lg:leading-[62.40px]">
                                Kolaborasi Seru Perusahaan PT. X bersama Mitra Perusahaan
                            </h1>

                            <div className="w-full py-4">
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
                        </div>
                    </div>
                </div>
            </section>

            <div data-aos="fade-up" data-aos-delay="500"
                className="grid grid-cols-1 px-28 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-[24px] md:mx-0 lg:mx-0">
                <div onclick="showModalPreviewImage(0)"
                    className="relative flex justify-center overflow-hidden bg-gray-400 aspect-video rounded-3xl">
                    <img className="object-contain w-full h-full" src="https://demo.fitaja.id//storage/galery-images/NWpkTIdlt9fZCi4D4VvFdKYxnVM2rFK052okcMyZ.jpg"
                        alt="" />
                    <div
                        className="h-full opacity-0 transition-all duration-300 absolute bottom-0 w-full flex p-2.5 bg-gradient-to-b from-primary-300 to-primary-100 rounded-3xl hover:opacity-75 justify-center items-center text-center text-white text-base md:text-xl lg:text-xl font-normal hover:cursor-pointer">
                        <p className="overflow-hidden text-center break-words"></p>
                    </div>
                </div>
                <div onclick="showModalPreviewImage(1)"
                    className="relative flex justify-center overflow-hidden bg-gray-400 aspect-video rounded-3xl">
                    <img className="object-contain w-full h-full" src="https://demo.fitaja.id//storage/galery-images/Cg5sQZfZqxAE3IwYRsi8bOhHZ95nv8vZnRWgZ3RD.jpg"
                        alt="" />
                    <div
                        className="h-full opacity-0 transition-all duration-300 absolute bottom-0 w-full flex p-2.5 bg-gradient-to-b from-primary-300 to-primary-100 rounded-3xl hover:opacity-75 justify-center items-center text-center text-white text-base md:text-xl lg:text-xl font-normal hover:cursor-pointer">
                        <p className="overflow-hidden text-center break-words"></p>
                    </div>
                </div>
                <div onclick="showModalPreviewImage(2)"
                    className="relative flex justify-center overflow-hidden bg-gray-400 aspect-video rounded-3xl">
                    <img className="object-contain w-full h-full" src="https://demo.fitaja.id//storage/galery-images/xER5MnpEOhxAOrkZX5VJsYtEEabzG3GisE9UHWoK.png"
                        alt="" />
                    <div
                        className="h-full opacity-0 transition-all duration-300 absolute bottom-0 w-full flex p-2.5 bg-gradient-to-b from-primary-300 to-primary-100 rounded-3xl hover:opacity-75 justify-center items-center text-center text-white text-base md:text-xl lg:text-xl font-normal hover:cursor-pointer">
                        <p className="overflow-hidden text-center break-words"></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thumbnail