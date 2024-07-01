import { Route, Routes } from "react-router-dom";
import { UserSignupPage } from "../../pages/UserSignupPage";
import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { CategoryListPage } from "../../pages/CategoryListPage";
import ProductListPage from "../../pages/ProductListPage";

export function BaseRoutes() {
    return(
        <>
            <Routes>
                {/*Rotas publicas: */}

                <Route path="/signup" element = {<UserSignupPage/>}/>
                <Route path="/login" element = {<LoginPage/>}/>
                {/*Rotas privadas: */}
                <Route element = {<AuthenticatedRoutes/>}>
                    <Route path="/products" element = {<ProductListPage/>}/>
                    <Route path = "/categories" element = {<CategoryListPage/>}/>
                    <Route path = "/" element = {<HomePage/>}/>
                    <Route path = "/home" element = {<HomePage/>}/>
                </Route>
                

            </Routes>
        </>
    )
}