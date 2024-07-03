import ProductListPage from "../../components/ProductListPage";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function ShotgunPage() {
    return(
        <>
            <Navbar/>
            <ProductListPage categoryId="3"/>
            <Footer/>
        </>
    );
};