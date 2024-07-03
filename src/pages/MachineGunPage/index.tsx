import ProductListPage from "../../components/ProductListPage";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function MachineGunPage() {

    return(
        <>
            <Navbar/>
            <ProductListPage categoryId="4"/>
            <Footer/>
        </>
    );
};