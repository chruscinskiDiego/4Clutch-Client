import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import ProductListPage from "../../components/ProductListPage";

export default function SubPage() {

    return(
        <>
            <Navbar/>
            <ProductListPage categoryId="2"/>
            <Footer/>
        </>
    );
};