import React from 'react'

const Kategori = () => {
    return (
        <>
            <div className="features w-full mt-24">
                <div className="feature-options">
                    <h1 className="text-2xl font-semibold text-primary-100 mx-20 mt-10 mb-2">
                        Lihat lebih banyak dengan PT. X
                    </h1>
                    <div className="flex text-lg gap-4 overflow-hidden tab-content mx-20">
                        <button
                            className='focus:outline-none bg-primary-400 focus:bg-primary-200 font-semibold py-2 px-4 w-32 text-center rounded-xl text-white'
                        >
                            Blog
                        </button>
                        <button
                            className='focus:outline-none bg-primary-400 focus:bg-primary-200 font-semibold py-2 px-4 w-32 text-center rounded-xl text-white'
                        >
                            Gallery
                        </button>
                        <button
                            className='focus:outline-none bg-primary-400 focus:bg-primary-200 font-semibold py-2 px-4 w-32 text-center rounded-xl text-white'
                        >
                            Video
                        </button>
                    </div>
                    <div
                        id="articles-options"
                        className='justify-between flex h-10 md:h-[44px] gap-2 md:gap-4 options px-20 mt-4'
                    >
                        <div className="w-2/3 md:w-3/4">
                            <div className="flex w-full overflow-hidden rounded-xl">
                                <input

                                    id="searchArticles"
                                    type="text"
                                    placeholder="Cari..."
                                    className="w-full border-2 px-4 py-2 rounded-r-none outline-none rounded-l-xl border-neutral-400 focus:border-primary-200"
                                />
                                <button
                                    className='px-6 py-2 font-semibold text-white bg-primary-300 text-nd lg:text-xl rounded-r-xl'
                                >
                                    Cari
                                </button>
                            </div>
                        </div>
                        <select
                            className="w-1/3 my-auto text-base font-semibold text-center border-2 md:my-0 md:w-1/4 text-primary-200 md:text-xl rounded-xl border-primary-200"
                            id="sortArticles"
                            name="orderBy"
                        >
                            <option value="latest">Baru</option>
                            <option value="popular">Populer</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kategori