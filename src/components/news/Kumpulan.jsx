import React from 'react'

const Kumpulan = () => {
  return (
    <>
        <div x-data="content" id="wrapper" className="w-11/12 mx-auto 2xl:w-4/5">
        <h2 className="w-11/12 mx-auto my-4 text-2xl font-semibold md:text-3xl text-primary-100">Lebih dekat dengan Fitaja!</h2>
        <div className="flex flex-col w-11/12 gap-2 mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2 sm:justify-normal sm:items-start">
                <button x-on:click="show = 'article'" x-bind:className="show == 'article' ? 'bg-primary-200' : 'bg-primary-400'"
                    className="px-6 py-2 text-base font-semibold text-white md:px-12 md:text-xl tab-button rounded-2xl"
                    data-tab="articles">Berita</button>
                <button x-on:click="show = 'gallery'" x-bind:className="show == 'gallery' ? 'bg-primary-200' : 'bg-primary-400'"
                    className="px-6 py-2 text-base font-semibold text-white md:px-12 md:text-xl tab-button rounded-2xl"
                    data-tab="images">Galeri</button>
                <button x-on:click="show = 'videos'" x-bind:className="show == 'videos' ? 'bg-primary-200' : 'bg-primary-400'"
                    className="px-6 py-2 text-base font-semibold text-white md:px-12 md:text-xl tab-button rounded-2xl"
                    data-tab="videos">Video</button>
            </div>

            <div x-bind:style="show == 'article' && { display: 'flex' }" id="articles-options"
                className="justify-between hidden h-10 md:h-[44px] gap-2 md:gap-4 options">
                <div className="w-2/3 md:w-3/4" x-data="{ isFocus: false }">
                    <div className="flex w-full overflow-hidden rounded-xl">
                        <input x-on:focus="isFocus = true" x-on:blur="isFocus = false" x-ref="input" id="searchArticles"
                            x-model="articleSearch" type="text" placeholder="Cari..."
                            className="w-full border-2 rounded-r-none outline-none rounded-l-xl border-neutral-400 focus:border-primary-200" />
                        <button x-bind:className="articleSearch || isFocus ? 'bg-primary-200' : 'bg-primary-400'"
                            className="px-6 py-2 font-semibold text-white text-nd lg:text-xl rounded-r-xl">Cari</button>
                    </div>
                </div>
                <select x-model="sortArticle"
                    className="w-1/3 my-auto text-base font-semibold text-center border-2 md:my-0 md:w-1/4 text-primary-200 md:text-xl rounded-xl border-primary-200"
                    id="sortArticles" name="orderBy">
                    <option value="latest">Baru</option>
                    <option value="popular">Populer</option>
                </select>
            </div>
            <div x-bind:style="show == 'gallery' && { display: 'flex' }" id="images-options"
                className="justify-between hidden h-10 md:h-[44px] gap-2 md:gap-4 options">
                <div className="w-2/3 md:w-3/4" x-data="{ isFocus: false }">
                    <div className="flex w-full overflow-hidden rounded-xl">
                        <input x-on:focus="isFocus = true" x-on:blur="isFocus = false" x-ref="input" id="searchImages"
                            x-model="gallerySearch" type="text" placeholder="Cari..."
                            className="w-full border-2 rounded-r-none outline-none rounded-l-xl border-neutral-400 focus:border-primary-200" />
                        <button x-bind:className="gallerySearch || isFocus ? 'bg-primary-200' : 'bg-primary-400'"
                            className="px-6 py-2 text-base font-semibold text-white lg:text-xl bg-primary-200 rounded-r-xl">Cari</button>
                    </div>
                </div>
                <select x-model="sortGallery"
                    className="w-1/3 my-auto text-base font-semibold text-center border-2 md:my-0 md:w-1/4 text-primary-200 md:text-xl rounded-xl border-primary-200"
                    id="sortArticles" name="sorting">
                    <option value="latest">Baru</option>
                    <option value="popular">Populer</option>
                </select>
            </div>

            <div x-bind:style="show == 'videos' && { display: 'flex' }" id="videos-options"
                className="justify-between hidden h-10 md:h-[44px] gap-2 md:gap-4 options">
                <div className="w-2/3 md:w-3/4" x-data="{ isFocus: false }">
                    <div className="flex w-full overflow-hidden rounded-xl">
                        <input x-on:focus="isFocus = true" x-on:blur="isFocus = false" x-ref="input" id="searchVideos"
                            x-model="videoSearch" type="text" placeholder="Cari..."
                            className="w-full border-2 rounded-r-none outline-none rounded-l-xl border-neutral-400 focus:border-primary-200" />
                        <button x-bind:className="videoSearch || isFocus ? 'bg-primary-200' : 'bg-primary-400'"
                            className="px-6 py-2 text-base font-semibold text-white lg:text-xl bg-primary-200 rounded-r-xl">Cari</button>
                    </div>
                </div>
                <select x-model="sortVideo"
                    className="w-1/3 my-auto text-base font-semibold text-center border-2 md:my-0 md:w-1/4 text-primary-200 md:text-xl rounded-xl border-primary-200"
                    id="sortVideos" name="sorting">
                    <option value="latest">Baru</option>
                    <option value="popular">Populer</option>
                </select>
            </div>
            </div>
            </div>
    </>
  )
}

export default Kumpulan