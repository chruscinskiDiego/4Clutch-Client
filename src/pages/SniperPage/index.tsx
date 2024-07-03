import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import ProductListPage from "../../components/ProductListPage";

export default function SniperPage() {

    return(
        <>
            <Navbar/>
            <ProductListPage categoryId="6"/>
            <Footer/>
        </>
    );
};