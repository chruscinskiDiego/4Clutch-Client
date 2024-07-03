import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import ProductListPage from "../../components/ProductListPage";

export default function PistolPage(){
    return (
      <>
        <Navbar/>
        <ProductListPage categoryId="1"/>
        <Footer/>
      </>
    );
};
