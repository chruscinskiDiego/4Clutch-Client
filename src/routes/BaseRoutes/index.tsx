import { Route, Routes } from "react-router-dom";
import { UserSignupPage } from "../../pages/UserSignupPage";
import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { Navbar } from "../../components/Navbar";

export function BaseRoutes() {
    return(
        <>
            <Routes>
                {/*Rotas publicas: */}

                <Route path="/signup" element = {<UserSignupPage/>}/>
                <Route path="/login" element = {<LoginPage/>}/>
                <Route path="/teste" element = {<Navbar/>}/>
                {/*Rotas privadas: */}
                <Route element = {<AuthenticatedRoutes/>}>
                    <Route path = "/" element = {<HomePage/>}/>
                    <Route path = "/home" element = {<HomePage/>}/>
                </Route>
                

            </Routes>
        </>
    )
}