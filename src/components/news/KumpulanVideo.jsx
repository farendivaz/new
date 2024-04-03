import React, { useState } from "react";
import SorotanVideo from "./SorotanVideo";

const KumpulanVideo = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
      <div className="mt-28">
      <SorotanVideo />
      <div
        className="relative flex flex-col mt-6 items-center justify-center w-full overflow-hidden px-7 lg:px-[76px] xl:px-[108px] 2xl:px-[140px] mb-6">
        <section
          className="w-full md:w-11/12 min-[840px]:w-10/12 lg:w-full overflow-hidden lg:px-5 box-content">
          <div className="flex gap-12 items-center justify-start w-full">
            <div className="w-96 group mx-auto"> 
              <div className="relative aspect-video w-96 group-hover:opacity-80">
                <img
                  className="aspect-video w-96 rounded-2xl"
                  onClick={openModal}
                  src="https://img.youtube.com/vi/4UZrsTqkcW4/maxresdefault.jpg"
                  alt="Youtube Thumbnail"
                />
                <img
                  onClick={openModal}
                  className="absolute inset-0 flex items-center justify-center m-auto w-16 border-white"
                  src="/public/play.png"
                  alt="Play Button"
                />
              </div>
              <h1
                className="text-lg pt-2 font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200 hover:text-primary-200"
              >
                Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval...
              </h1>
            </div>

            <div className="w-96 group mx-auto"> 
              <div className="relative aspect-video w-96 group-hover:opacity-80">
                <img
                  className="aspect-video w-96 rounded-2xl"
                  onClick={openModal}
                  src="https://img.youtube.com/vi/4UZrsTqkcW4/maxresdefault.jpg"
                  alt="Youtube Thumbnail"
                />
                <img
                  onClick={openModal}
                  className="absolute inset-0 flex items-center justify-center m-auto w-16 border-white"
                  src="/public/play.png"
                  alt="Play Button"
                />
              </div>
              <h1
                className="text-lg pt-2 font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200 hover:text-primary-200"
              >
                Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval...
              </h1>
            </div>
            <div className="w-96 group mx-auto">
              <div className="relative aspect-video w-96 group-hover:opacity-80">
                <img
                  className="aspect-video w-96 rounded-2xl"
                  onClick={openModal}
                  src="https://img.youtube.com/vi/4UZrsTqkcW4/maxresdefault.jpg"
                  alt="Youtube Thumbnail"
                />
                <img
                  onClick={openModal}
                  className="absolute inset-0 flex items-center justify-center m-auto w-16 border-white"
                  src="/public/play.png"
                  alt="Play Button"
                />
              </div>
              <h1
                className="text-lg pt-2 font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200 hover:text-primary-200"
              >
                Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval...
              </h1>
            </div>
          </div>
        </section>
        {modal ? (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75">
                            <div className="rounded">
                                <div className="relative">
                                    <h1
                                        onClick={openModal}
                                        className="absolute top-0 border text-xl bg-white border-white rounded-full p-1 -right-10 text-gray-800 cursor-pointer"
                                    >
                                        ❌
                                    </h1>
                                    <iframe
                                        loading="lazy"
                                        width="1200"
                                        height="600"
                                        src="https://www.youtube.com/embed/mTNNR4Ikwv4?si=DWpoNI9TqDKYpMqW?autoplay=1"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    ) : null}
      </div>
    </div>
  );
};

export default KumpulanVideo;
