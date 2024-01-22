import { useState } from "react";
import Cerita from "./Cerita";
import VideoPopup from "./VideoPopup";
import Galeri from "./Galeri";

const Features = () => {
  const [tab, setTab] = useState("blog");
  const [blogPosts, setBlogPosts] = useState(
    Array.from({ length: 2 }, (_, index) => index + 1)
  );
  const [videoPopup, setVideoPopup] = useState(
    Array.from({ length: 2 }, (_, index) => index + 1)
  );
  const [galleryPhotos, setGalleryPhotos] = useState(
    Array.from({ length: 2 }, (_, index) => index + 1)
  );
  const handleClick = () => {
    // Add 3 more blog posts when the button is clicked
    if (tab === "blog") {
      setBlogPosts((prevPosts) => [
        ...prevPosts,
        ...Array.from(
          { length: 2 },
          (_, index) => prevPosts.length + index + 1
        ),
      ]);
    } else if (tab === "video") {
      setVideoPopup((prevVideo) => [
        ...prevVideo,
        ...Array.from(
          { length: 2 },
          (_, index) => prevVideo.length + index + 1
        ),
      ]);
    } else if (tab === "gallery") {
      setGalleryPhotos((prevGallery) => [
        ...prevGallery,
        ...Array.from(
          { length: 2 },
          (_, index) => prevGallery.length + index + 1
        ),
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
            className={`focus:outline-none ${tab === "blog"
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

        {tab === "blog" && (
          <>
            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-8 mb-10 text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
            >
              Kumpulan Cerita!
            </h1>
            {blogPosts.map((postId) => (
              <Cerita key={postId} postId={postId} />
            ))}
          </>
        )}

        {tab === "gallery" && (
          <>
            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-8 mb-10 text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
            >
              Kumpulan Galeri!
            </h1>
            {galleryPhotos.map((galleryId) => (
              <Galeri key={galleryId} galleryId={galleryId} />
            ))}
          </>
        )}
        {tab === "video" && (
          <>
            <h1
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-8 mb-12 text-2xl font-semibold text-center md:text-3xl lg:text-4xl"
            >
              Kumpulan Video!
            </h1>
            {videoPopup.map((videoId) => (
              <VideoPopup key={videoId} videoId={videoId} />
            ))}
          </>
        )}
        <div onClick={handleClick} className="flex justify-center my-4">
          <button className="px-8 py-1 mx-auto my-5 text-base font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
