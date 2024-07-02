import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer'; // Importe o Footer aqui

export function AuthenticatedRoutes() {
    const isAuthenticated = AuthService.isAuthenticated();
    const location = useLocation();

    return isAuthenticated ? (
        <>
            <Navbar />
            <Outlet />
            <Footer /> {/* Adicione o Footer aqui */}
        </>
    ) : (
        <>
            <Navigate to="/login" state={{ from: location }} replace />
        </>
    );
}
