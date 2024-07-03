import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import ProductListPage from "../../components/ProductListPage";

export default function KnifePage() {

    return(
        <>
            <Navbar/>
            <ProductListPage categoryId="7"/>
            <Footer/>
        </>
    );
};