import React from 'react'
import Auth from './Auth';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {
    const { isValidToken } = Auth();

    // Get the token from localStorage
    const token = localStorage.getItem("token");

    // If the token is not valid, redirect to the login page
    if (!isValidToken(token)) {
        return <Navigate to="404" />;
    }
    // If the token is valid, render the child routes
    return <Outlet />;
};
