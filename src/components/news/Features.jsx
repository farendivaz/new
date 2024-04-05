import { useState } from "react";
import { blogPosts, galleries, videos } from "../../data";
import ArticleCard from "../blog/ArticleCard";
import GalleryCard from "../galeri/GalleryCard";
import KumpulanVideo from "./KumpulanVideo";
import Sorotan from "./Sorotan";
import SorotanGaleri from "./SorotanGaleri";
import SorotanVideo from "./SorotanVideo";

const Features = () => {
  const [tab, setTab] = useState("blog");
  const [search, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [blogPage, setBlogPage] = useState(1);
  const [galleryPage, setGalleryPage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);

  const [blogPostsToShow, setBlogPostsToShow] = useState(blogPosts.slice(0, 6));
  const [galleriesToShow, setGalleriesToShow] = useState(galleries.slice(0, 6));
  const [videosToShow, setVideosToShow] = useState(videos.slice(0, 6));

  const handleClick = (tab) => {
    if (tab === "blog") {
      setBlogPage(blogPage + 1);
      setBlogPostsToShow([
        ...blogPostsToShow,
        ...blogPosts.slice(blogPage * 6, (blogPage + 1) * 6),
      ]);
    } else if (tab === "gallery") {
      setGalleryPage(galleryPage + 1);
      setGalleriesToShow([
        ...galleriesToShow,
        ...galleries.slice(galleryPage * 6, (galleryPage + 1) * 6),
      ]);
    } else if (tab === "video") {
      setVideoPage(videoPage + 1);
      setVideosToShow([
        ...videosToShow,
        ...videos.slice(videoPage * 6, (videoPage + 1) * 6),
      ]);
    }
  };

  return (
    <div className="features w-full">
      <div className="feature-options">
        <h1 className="text-2xl font-semibold text-primary-100 mx-20 mt-10 mb-3">
          Lihat lebih banyak dengan PT. X
        </h1>
        <div className="flex text-lg gap-4 overflow-hidden tab-content mx-20">
          <button
            className={`focus:outline-none ${
              tab === "blog"
                ? "bg-primary-200 text-white"
                : "bg-primary-400 text-white"
            } font-semibold py-2 px-4 w-32 text-center rounded-xl`}
            onClick={() => setTab("blog")}
          >
            Blog
          </button>
          <button
            className={`focus:outline-none bg-primary-400 focus:bg-primary-200 font-semibold py-2 px-4 w-32 text-center rounded-xl text-white`}
            onClick={() => setTab("gallery")}
          >
            Gallery
          </button>
          <button
            className={`focus:outline-none bg-primary-400 focus:bg-primary-200 font-semibold py-2 px-4 w-32 text-center rounded-xl text-white`}
            onClick={() => setTab("video")}
          >
            Video
          </button>
        </div>
        <div
          id="articles-options"
          className="justify-between flex h-10 md:h-[44px] gap-2 md:gap-4 options px-20 mt-4"
        >
          <div className="w-2/3 md:w-3/4">
            <div className="flex w-full overflow-hidden rounded-xl">
              <input
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                id="searchArticles"
                type="text"
                placeholder="Cari..."
                className="w-full border-2 px-4 py-2 rounded-r-none outline-none rounded-l-xl border-neutral-400 focus:border-primary-200"
              />
              <button
                className={`${
                  isFocus ? "bg-primary-200" : "bg-primary-400"
                } px-6 py-2 font-semibold text-white text-nd lg:text-xl rounded-r-xl`}
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

        {tab === "blog" && (
          <>
            <Sorotan />
            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-8 mb-10 text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
            >
              Kumpulan Cerita!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {search ? (
                <>
                  {blogPostsToShow
                    .filter((post) =>
                      post.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((post) => (
                      <ArticleCard key={post.id} post={post} />
                    ))}
                </>
              ) : (
                <>
                  {blogPostsToShow.map((post) => (
                    <ArticleCard key={post.id} post={post} />
                  ))}
                </>
              )}
            </div>
          </>
        )}

        {tab === "gallery" && (
          <>
            <SorotanGaleri />
            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-8 mb-10 text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
            >
              Kumpulan Galeri!
            </h1>
            <div className="grid w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {search ? (
                <>
                  {galleriesToShow
                    .filter((gallery) =>
                      gallery.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((gallery) => (
                      <GalleryCard key={gallery.id} gallery={gallery} />
                    ))}
                </>
              ) : (
                <>
                  {galleriesToShow.map((gallery) => (
                    <GalleryCard key={gallery.id} gallery={gallery} />
                  ))}
                </>
              )}
            </div>
          </>
        )}
        {tab === "video" && (
          <>
            <SorotanVideo />
            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-8 mb-12 text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
            >
              Kumpulan Video!
            </h1>
            <div className="grid w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {search ? (
                <>
                  {videos
                    .filter((video) =>
                      video.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .slice(0, 6)
                    .map((video) => (
                      <KumpulanVideo key={video.youtubeId} video={video} />
                    ))}
                </>
              ) : (
                <>
                  {videos.slice(0, 6).map((video) => (
                    <KumpulanVideo key={video.youtubeId} video={video} />
                  ))}
                </>
              )}
            </div>
          </>
        )}
        <div className="flex justify-center my-4">
          {(() => {
            if (tab === "blog") {
              return (
                blogPosts.filter((post) =>
                  post.title.toLowerCase().includes(search.toLowerCase())
                ).length >
                  blogPage * 6 && (
                  <button
                    onClick={() => handleClick("blog")}
                    className="px-8 py-1 mx-auto my-5 text-base font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                  >
                    Selengkapnya
                  </button>
                )
              );
            } else if (tab === "gallery") {
              return (
                galleries.filter((gallery) =>
                  gallery.title.toLowerCase().includes(search.toLowerCase())
                ).length >
                  galleryPage * 6 && (
                  <button
                    onClick={() => handleClick("gallery")}
                    className="px-8 py-1 mx-auto my-5 text-base font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                  >
                    Selengkapnya
                  </button>
                )
              );
            } else if (tab === "video") {
              return (
                videos.filter((video) =>
                  video.title.toLowerCase().includes(search.toLowerCase())
                ).length >
                  videoPage * 6 && (
                  <button
                    onClick={() => handleClick("video")}
                    className="px-8 py-1 mx-auto my-5 text-base font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                  >
                    Selengkapnya
                  </button>
                )
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Features;
