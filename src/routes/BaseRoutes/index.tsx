import { Route, Routes } from "react-router-dom";
import { UserSignupPage } from "../../pages/UserSignupPage";
import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";

export function BaseRoutes() {
    return(
        <>
            <Routes>
                {/*Rotas publicas: */}

                <Route path="/signup" element = {<UserSignupPage/>}/>
                <Route path="/login" element = {<LoginPage/>}/>

                {/*Rotas privadas: */}

                <Route path = "/" element = {<HomePage/>}/>
                <Route path = "/home" element = {<HomePage/>}/>

            </Routes>
        </>
    )
}