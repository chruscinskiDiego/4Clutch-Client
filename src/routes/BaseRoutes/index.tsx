import { Route, Routes } from "react-router-dom";
import { UserSignupPage } from "../../pages/UserSignupPage";
import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { CategoryListPage } from "../../pages/CategoryListPage";
import PistolPage from "../../pages/PistolPage";
import SubPage from "../../pages/SubPage";
import ShotgunPage from "../../pages/ShotgunPage";
import MachineGunPage from "../../pages/MachineGunPage";
import RiflePage from "../../pages/RiflePage";
import SniperPage from "../../pages/SniperPage";
import KnifePage from "../../pages/KnifePage";
import CartPage from "../../pages/CartPage";

export function BaseRoutes() {
    return(
        <>
            <Routes>
                {/*Rotas publicas: */}

                <Route path ="/signup" element = {<UserSignupPage/>}/>
                <Route path ="/login" element = {<LoginPage/>}/>
                <Route path ="/produtos/pistolas" element = {<PistolPage/>}/>                    
                <Route path ="/produtos/submetralhadoras" element = {<SubPage/>}/>                    
                <Route path ="/produtos/espingardas" element = {<ShotgunPage/>}/>                    
                <Route path ="/produtos/metralhadoras" element = {<MachineGunPage/>}/>                    
                <Route path ="/produtos/rifles" element = {<RiflePage/>}/>                    
                <Route path ="/produtos/snipers" element = {<SniperPage/>}/>                    
                <Route path ="/produtos/facas" element = {<KnifePage/>}/>
                <Route path = "/" element = {<HomePage/>}/>
                <Route path = "/home" element = {<HomePage/>}/>
                <Route path = "/carrinho" element = {<CartPage/>}/>
                
                {/*Rotas privadas: */}

                <Route element = {<AuthenticatedRoutes/>}>                                            
                <Route path = "/categories" element = {<CategoryListPage/>}/>
                    
                </Route>
                

            </Routes>
        </>
    )
}