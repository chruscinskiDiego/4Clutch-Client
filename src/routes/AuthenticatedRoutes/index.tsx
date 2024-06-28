import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthService from "../../services/AuthService"
import { Navbar } from "../../components/Navbar";

export function AuthenticatedRoutes() {

    const isAuthenticated = AuthService.isAuthenticated();
    const location = useLocation();

    return(
        isAuthenticated ? (
        <>
            <Navbar/>
            {/* Coringa para exibir o elemento na BaseRoutes*/}
            <Outlet/>
        
        </>) : (
            <>
                <Navigate to="/login" state={{from:location}} replace />
            </>
        )
    )
}