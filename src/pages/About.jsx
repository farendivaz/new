import Carouseltim from "../components/tentang/Carouseltim"
import Deskripsi from "../components/tentang/Deskripsi"
import Direksi from "../components/tentang/Direksi"
import Komisaris from "../components/tentang/Komisaris"
import Visi from "../components/tentang/Visi"
import Vpmanager from "../components/tentang/Vpmanager"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Milestone from "../components/tentang/Milestone"

const About = () => {
    return (
        <>
      <NavBar />
        <div className="bg-neutral-500">
            <div className=" mx-28">
                <Deskripsi />
                <Visi />
                <Milestone />
                <Komisaris />
                <Direksi />
                <Vpmanager />
                <Carouseltim />
            </div>
        </div>
      <Footer />
        </>

    )
}

export default About