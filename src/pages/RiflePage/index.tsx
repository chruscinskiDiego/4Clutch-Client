import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import ProductListPage from "../../components/ProductListPage";

export default function RiflePage(){
    return (
      <>
        <Navbar/>
        <ProductListPage categoryId="5"/>
        <Footer/>
      </>
    );
};