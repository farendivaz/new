function Footer() {
  return (
    <>
       <section
  id="footer"
  className="flex flex-col items-start w-full    bg-primary-200"
>
  <footer className="w-full flex flex-col px-[30px] h-auto lg:mx-auto xl:px-28  lg:px-16 ">
    <ul
      id="dropdown-list"
      className="flex flex-col self-stretch justify-start text-xl text-white lg:hidden font-roboto"
    >
      <div className="relative">
        <div>
          <li className="flex items-center justify-between py-4 font-bold transition-all duration-300 cursor-pointer list ">
            Fitur
            <div>
              <svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6071 13.1548C24.6071 6.84298 19.4904 1.72623 13.1786 1.72623C6.86675 1.72623 1.75 6.84298 1.75 13.1548C1.75 19.4666 6.86675 24.5834 13.1786 24.5834C19.4904 24.5834 24.6071 19.4666 24.6071 13.1548Z"
                  stroke="#FDFEFF"
                  strokeWidth="1.52381"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7014 17.4891L16.0843 13.2034L11.7014 8.91771"
                  stroke="#FDFEFF"
                  strokeWidth="1.52381"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </li>
        </div>
        <div className="relative w-full origin-top-left left-0">
          <div className=" bg-transparent">
            <a
              className="hover:underline block w-full py-3 leading-3 text-base text-neutral-500 font-medium transition duration-150 ease-in-out pl-5"
              href="https://demo.fitaja.id/fitur/#fit-tele"
            >
              FitTele
            </a>
            <a
              className="hover:underline block w-full py-3 leading-3 text-base text-neutral-500 font-medium transition duration-150 ease-in-out pl-5"
              href="https://demo.fitaja.id/fitur/#fit-medicine"
            >
              FitMedicine
            </a>
            <a
              className="hover:underline block w-full py-3 leading-3 text-base text-neutral-500 font-medium transition duration-150 ease-in-out pl-5"
              href="https://demo.fitaja.id/fitur/#fit-claim"
            >
              FitClaim
            </a>
            <a
              className="hover:underline block w-full py-3 leading-3 text-base text-neutral-500 font-medium transition duration-150 ease-in-out pl-5"
              href="https://demo.fitaja.id/fitur/#fit-code"
            >
              FitCode
            </a>
            <a
              className="hover:underline block w-full py-3 leading-3 text-base text-neutral-500 font-medium transition duration-150 ease-in-out pl-5"
              href="https://demo.fitaja.id/fitur"
            >
              Lihat fitur lainnya
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <div>
          <li className="flex items-center font-bold  py-4 justify-between gap-[70px] transition-all duration-300 cursor-pointer list ">
            Tentang
            <div>
              <svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6071 13.1548C24.6071 6.84298 19.4904 1.72623 13.1786 1.72623C6.86675 1.72623 1.75 6.84298 1.75 13.1548C1.75 19.4666 6.86675 24.5834 13.1786 24.5834C19.4904 24.5834 24.6071 19.4666 24.6071 13.1548Z"
                  stroke="#FDFEFF"
                  strokeWidth="1.52381"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7014 17.4891L16.0843 13.2034L11.7014 8.91771"
                  stroke="#FDFEFF"
                  strokeWidth="1.52381"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </li>
        </div>
        <div className="relative w-full origin-top-left left-0">
          <div className=" bg-transparent">
            <a
              className="hover:underline block w-full py-3 leading-3 text-base text-neutral-500 font-medium transition duration-150 ease-in-out pl-5"
              href="https://demo.fitaja.id/tentang/#perusahaan"
            >
              Perusahaan
            </a>
            <a
              className="hover:underline block w-full py-3 leading-3 text-base text-neutral-500 font-medium transition duration-150 ease-in-out pl-5"
              href="https://demo.fitaja.id/tentang/#tim"
            >
              Tim FitAja!
            </a>
            <a
              className="hover:underline block w-full py-3 leading-3 text-base text-neutral-500 font-medium transition duration-150 ease-in-out pl-5"
              href="https://demo.fitaja.id/tentang/#layanan"
            >
              Layanan
            </a>
            <a
              className="hover:underline block w-full py-3 leading-3 text-base text-neutral-500 font-medium transition duration-150 ease-in-out pl-5"
              href="https://demo.fitaja.id/cerita-fitaja"
            >
              Cerita FitAja!
            </a>
          </div>
        </div>
      </div>
      <li className="flex py-4 flex-col items-start gap-2 self-stretch">
        <div>
          <h5 className="font-bold hover:underline">
            <a href="https://demo.fitaja.id/hubungi-kami">Hubungi Kami</a>
          </h5>
        </div>
        <div className="font-roboto">
          <h5 className="text-base font-semibold text-left text-neutral-500">
            Customer Service
          </h5>
          <div className="flex flex-col items-start self-stretch justify-center gap-1 py-2 text-sm text-white">
            <a href="https://wa.me/6289525306216" target="_blank">
              <span>
                Phone <span className="pl-1">:</span>{" "}
                <span className="hover:underline hover:font-semibold">
                  089525306216
                </span>
              </span>
            </a>
            <a href="mailto:cs@fitaja.id" target="_blank">
              <span>
                Email <span className="pl-[9px]">:</span>{" "}
                <span className="hover:underline hover:font-semibold">
                  cs@fitaja.id
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="font-roboto">
          <h5 className="text-base font-semibold text-left text-neutral-500">
            Bisnis
          </h5>
          <div className="flex flex-col items-start self-stretch justify-center gap-1 py-2 text-sm text-white">
            <a href="mailto:partnership.bd@fitaja.id" target="_blank">
              <span>
                Email <span className="pl-[9px]">:</span>{" "}
                <span className="hover:underline hover:font-semibold">
                  partnership.bd@fitaja.id
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="font-roboto">
          <h5 className="text-base font-semibold text-left text-neutral-500">
            Karir
          </h5>
          <div className="flex flex-col items-start self-stretch justify-center gap-1 py-2 text-sm text-white">
            <a href="mailto:recruitment@fitaja.id" target="_blank">
              <span>
                Email <span className="pl-[9px]">:</span>{" "}
                <span className="hover:underline hover:font-semibold">
                  recruitment@fitaja.id
                </span>
              </span>
            </a>
          </div>
        </div>
      </li>
      <li className="flex flex-col justify-center items-start self-stretch pb-4 gap-2">
        <div className="text-xl font-bold text-white font-roboto">
          Ikuti Kami
        </div>
        <div className="flex items-start gap-6 sm:gap-8">
          <a href="https://www.instagram.com/fitaja.id/" target="_blank">
            <img
              src="https://demo.fitaja.id/assets/icons/instagram.svg"
              className="hover:scale-110 sm:w-8 "
              alt="Instagram Logo"
            />
          </a>
          <a href="https://www.facebook.com/FitAja.id" target="_blank">
            <img
              src="https://demo.fitaja.id/assets/icons/facebook.svg"
              className="hover:scale-110 sm:w-8"
              alt="Facebook Logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/fitaja-digital-nusantara/"
            target="_blank"
          >
            <img
              src="https://demo.fitaja.id/assets/icons/linkedin.svg"
              className="hover:scale-110 sm:w-8"
              alt="LikendIn Logo"
            />
          </a>
          <a href="https://www.tiktok.com/@fitaja.id" target="_blank">
            <img
              src="https://demo.fitaja.id/assets/icons/tiktok.svg"
              className="hover:scale-110 sm:w-8"
              alt="Tiktok Logo"
            />
          </a>
          <a href="https://twitter.com/FitAja_id" target="_blank">
            <img
              src="https://demo.fitaja.id/assets/icons/twitter.svg"
              className="hover:scale-110 sm:w-8"
              alt="Twitter Logo"
            />
          </a>
        </div>
      </li>
      <li className="flex flex-col justify-start items-start gap-2 pt-2.5 pb-4">
        <div className="self-stretch justify-start items-start gap-2.5 flex">
          <div className="text-xl font-bold leading-relaxed text-white font-roboto">
            Download FitAja!
          </div>
        </div>
        <div className="w-[140px] h-[174px] sm:w-[160px] sm:h-[194px] flex-col justify-center items-start gap-2.5 flex">
          <div className="p-2.5 bg-neutral-500 rounded-2xl flex-col justify-start items-start gap-2.5 flex">
            <img
              className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]"
              src="https://demo.fitaja.id/assets/img/qr-download-fitaja.png"
              alt=""
            />
          </div>
          <a
            href="https://myqrcode.mobi/2fe2e6f0"
            target="_blank"
            className="w-[140px] sm:w-[160px] px-2 py-2 bg-neutral-500 rounded-md justify-center items-center gap-2.5 flex text-primary-200 text-xs font-normal font-roboto leading-none hover:font-semibold hover:transition-all"
          >
            Download Sekarang!
          </a>
        </div>
      </li>
    </ul>
    <section className="lg:grid lg:grid-cols-4  hidden">
      <div className="flex py-5 flex-col items-start gap-[15px] lg:mx-[2px] xl:mx-8 2xl:mx-10 min-[1920px]:mx-14 self-stretch">
        <div>
          <h5 className="text-2xl font-bold text-neutral-500 hover:underline">
            <a href="https://demo.fitaja.id/fitur">Fitur</a>{" "}
          </h5>
        </div>
        <div className="text-base text-left font-roboto text-neutral-500">
          <ul className="gap-[10px]">
            <li className="py-1 hover:underline hover:font-semibold">
              <a href="https://demo.fitaja.id/fitur/#fit-tele">FitTele</a>
            </li>
            <li className="py-1 hover:underline hover:font-semibold">
              <a href="https://demo.fitaja.id/fitur/#fit-medicine">
                FitMedicine
              </a>
            </li>
            <li className="py-1 hover:underline hover:font-semibold">
              <a href="https://demo.fitaja.id/fitur/#fit-claim">FitClaim</a>
            </li>
            <li className="py-1 hover:underline hover:font-semibold">
              <a href="https://demo.fitaja.id/fitur/#fit-code">FitCode</a>
            </li>
            <li className="py-1 hover:underline hover:font-semibold">
              <a href="https://demo.fitaja.id/fitur">Lihat fitur lainnya</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="py-2 text-2xl font-bold text-white">Ikuti Kami di:</h5>
          <div className="flex items-start gap-4 p-1">
            <a
              href="https://www.instagram.com/fitaja.id/"
              target="_blank"
              className="hover:scale-110"
            >
              <img
                src="https://demo.fitaja.id/assets/icons/instagram.svg"
                alt="Instagram Logo"
              />
            </a>
            <a
              href="https://www.facebook.com/FitAja.id"
              target="_blank"
              className="hover:scale-110"
            >
              <img
                src="https://demo.fitaja.id/assets/icons/facebook.svg"
                alt="Facebook Logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/fitaja-digital-nusantara/"
              target="_blank"
              className="hover:scale-110"
            >
              <img
                src="https://demo.fitaja.id/assets/icons/linkedin.svg"
                alt="LinkedIn Logo"
              />
            </a>
            <a
              href="https://www.tiktok.com/@fitaja.id"
              target="_blank"
              className="hover:scale-110"
            >
              <img
                src="https://demo.fitaja.id/assets/icons/tiktok.svg"
                alt="Tiktok Logo"
              />
            </a>
            <a
              href="https://twitter.com/FitAja_id"
              target="_blank"
              className="hover:scale-110"
            >
              <img
                src="https://demo.fitaja.id/assets/icons/twitter.svg"
                alt="Twitter Logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex py-5 flex-col items-start gap-[15px] lg:mx-[2px] xl:mx-8 2xl:mx-10 min-[1920px]:mx-14 self-stretch">
        <div>
          <h5 className="text-2xl font-bold text-neutral-500 hover:underline">
            <a href="https://demo.fitaja.id/tentang/#perusahaan">Tentang</a>
          </h5>
        </div>
        <div className="text-base text-left font-roboto text-neutral-500">
          <ul className="gap-[10px]">
            <li className="py-1 hover:underline hover:font-semibold">
              <a href="https://demo.fitaja.id/tentang/#perusahaan">
                Perusahaan
              </a>
            </li>
            <li className="py-1 hover:underline hover:font-semibold">
              <a href="https://demo.fitaja.id/tentang/#tim">Tim FitAja!</a>
            </li>
            <li className="py-1 hover:underline hover:font-semibold">
              <a href="https://demo.fitaja.id/tentang/#layanan">Layanan</a>
            </li>
            <li className="py-1 hover:underline hover:font-semibold">
              <a href="https://demo.fitaja.id/cerita-fitaja">Cerita FitAja!</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 flex-col items-start gap-[15px] lg:mx-[2px] xl:mx-8 2xl:mx-10 min-[1920px]:mx-14 self-stretch">
        <div>
          <h5 className="text-2xl font-bold text-neutral-500 hover:underline">
            <a href="https://demo.fitaja.id/hubungi-kami">Hubungi Kami</a>
          </h5>
        </div>
        <div className="font-roboto">
          <h5 className="text-base font-semibold text-left text-neutral-500">
            Customer Service
          </h5>
          <div className="flex flex-col items-start self-stretch justify-center gap-1 py-2 text-sm text-white">
            <a href="https://wa.me/6289525306216" target="_blank">
              <span>
                Phone <span className="pl-1">:</span>{" "}
                <span className="hover:underline hover:font-semibold">
                  089525306216
                </span>
              </span>
            </a>
            <a href="mailto:cs@fitaja.id" target="_blank">
              <span>
                Email <span className="pl-[9px]">:</span>{" "}
                <span className="hover:underline hover:font-semibold">
                  cs@fitaja.id
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="font-roboto">
          <h5 className="text-base font-semibold text-left text-neutral-500">
            Bisnis
          </h5>
          <div className="flex flex-col items-start self-stretch justify-center gap-1 py-2 text-sm text-white">
            <a href="mailto:partnership.bd@fitaja.id" target="_blank">
              <span>
                Email <span className="pl-[9px]">:</span>{" "}
                <span className="hover:underline hover:font-semibold">
                  partnership.bd@fitaja.id
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="font-roboto">
          <h5 className="text-base font-semibold text-left text-neutral-500">
            Karir
          </h5>
          <div className="flex flex-col items-start self-stretch justify-center gap-1 py-2 text-sm text-white">
            <a href="mailto:recruitment@fitaja.id" target="_blank">
              <span>
                Email <span className="pl-[9px]">:</span>{" "}
                <span className="hover:underline hover:font-semibold">
                  recruitment@fitaja.id
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-5 items-start gap-[15px] lg:mx-[2px] xl:mx-8 2xl:mx-10 min-[1920px]:mx-14">
        <div>
          <h5 className="text-2xl font-bold text-neutral-500">
            Download FitAja!
          </h5>
        </div>
        <div className="flex flex-col w-full gap-8 ">
          <div className="lg:w-[180px] xl:w-[200px] xl:h-[262px] py-1 flex-col justify-center items-center gap-3 flex">
            <div className="lg:w-[180px] xl:w-[200px] xl:h-[200px] p-2.5 bg-neutral-500 rounded-[20px] justify-center items-center flex">
              <img
                className="lg:w-[160px] xl:w-[180px] xl:h-[180px]"
                src="https://demo.fitaja.id/assets/img/qr-download-fitaja.png"
                alt="QR Download Fitaja"
              />
            </div>
            <a
              href="https://myqrcode.mobi/2fe2e6f0"
              target="_blank"
              className="p-2 lg:w-full bg-neutral-500 rounded-lg justify-center items-center gap-2.5 flex text-primary-200 text-base font-normal font-roboto leading-relaxed hover:font-semibold hover:transition-all"
            >
              Download Sekarang!
            </a>
          </div>
        </div>
      </div>
    </section>
  </footer>
  <section className="hidden md:flex w-full py-4 lg:py-[10px] justify-center items-center shrink-0">
    <a href="https://demo.fitaja.id/kebijakan-privasi" target="_blank">
      <div className="text-white text-base font-semibold font-roboto leading-relaxed hover:underline hover:font-bold">
        Kebijakan Privasi
      </div>
    </a>
    <div className="w-[2px] h-4 rounded-lg ring-primary-400 bg-primary-400 mx-4 flex justify-center" />
    <a href="https://demo.fitaja.id/syarat-ketentuan" target="_blank">
      <div className="text-white text-base font-semibold font-roboto leading-relaxed hover:underline hover:font-bold">
        Syarat &amp; Ketentuan
      </div>
    </a>
  </section>
  <section className="md:hidden w-full px-4 py-4 lg:py-[10px]">
    <div className="flex justify-center items-center">
      <a href="https://demo.fitaja.id/kebijakan-privasi" target="_blank">
        <div className="text-white text-base font-semibold font-roboto leading-relaxed hover:underline hover:font-bold">
          Kebijakan Privasi
        </div>
      </a>
      <div className="w-[2px] h-4 rounded-lg ring-primary-400 bg-primary-400 mx-4 flex justify-center" />
      <a href="https://demo.fitaja.id/syarat-ketentuan" target="_blank">
        <div className="text-white text-base font-semibold font-roboto leading-relaxed hover:underline hover:font-bold">
          Syarat &amp; Ketentuan
        </div>
      </a>
    </div>
  </section>
  <section className="w-full py-2.5 bg-primary-100 flex-col justify-center items-center gap-2.5 flex">
    <div className="text-xs leading-none text-neutral-500 font-roboto sm:text-sm md:text-xs">
      Hak Cipta © 2024 FitAja. All Rights Reserved.
    </div>
  </section>
</section>
    </>
  );
}

export default Footer;