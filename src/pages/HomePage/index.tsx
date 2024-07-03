import HomeCarousel from "../../components/HomeCarousel";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function HomePage() {
    return (
        <>
            <Navbar/>
            <HomeCarousel/>
            <Footer/>
        </>
    )
}