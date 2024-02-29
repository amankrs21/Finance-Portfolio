import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

// Create an instance of Axios with default configurations
const http = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-type": "application/json"
    },
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
    credentials: "include",
    withCredentials: true,
});

// Intercept responses to handle unauthorized errors
http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401 || error.response.status === 403 || error.response.status === 404) {
            console.log("Unauthorized");
            localStorage.removeItem("token");
            window.location = "/";
        }
        return Promise.reject(error);
    }
);

export default function Auth() {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Load the saved token from local storage and validate it
        const savedToken = localStorage.getItem("token");
        if (savedToken && isValidToken(savedToken)) {
            setToken(savedToken);
            http.defaults.headers.common.Authorization = `Bearer ${savedToken}`;
        }
        else {
            localStorage.removeItem("token");
        }
    }, []);

    const saveToken = (token) => {
        if (isValidToken(token)) {
            localStorage.setItem("token", token);
            setToken(token);
            http.defaults.headers.common.Authorization = `Bearer ${token}`;
            navigate("/");
        }
    };

    const isValidToken = (token) => {
        if (token) {
            try {
                // Decode the JWT token and check its expiration
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                if (decodedToken.exp < currentTime) {
                    return false;
                }
                return true;
            } catch (error) {
                console.error("Error decoding token:", error);
                return false;
            }
        }
    };

    return {
        setToken: saveToken,
        isValidToken,
        token,
        http,
    };
}
