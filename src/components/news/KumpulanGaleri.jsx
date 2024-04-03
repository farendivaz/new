import ArtikelGaleriMerangkul from "../galeri/ArtikelGaleriMerangkul"
import ArtikelGaleriPenandatanganan from "../galeri/ArtikelGaleriPenandatanganan"
import ArtikelGaleriTampilBeda from "../galeri/ArtikelGaleriTampilBeda"
import SorotanGaleri from "./SorotanGaleri"

const KumpulanGaleri = () => {
    return (
        <div className="mt-28">
            <SorotanGaleri/>
            <div
                className="relative flex flex-col items-center justify-center w-full overflow-hidden px-7 lg:px-[76px] xl:px-[108px] 2xl:px-[140px] mb-6">
                <section
                    className="w-full md:w-11/12 mt-6 min-[840px]:w-10/12 lg:w-full overflow-hidden lg:px-5 box-content">
                    <div className="flex">
                        <ArtikelGaleriPenandatanganan/>
                        <ArtikelGaleriMerangkul/>
                        <ArtikelGaleriTampilBeda/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default KumpulanGaleri