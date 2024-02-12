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
        if (error.response.status === 401) {
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
        }
    }, [navigate]);

    const saveToken = (token) => {
        if (isValidToken(token)) {
            // Save the token to local storage and set it in state
            localStorage.setItem("token", token);
            setToken(token);
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

    // Set the Authorization header for all HTTP requests
    http.defaults.headers.common.Authorization = `Bearer ${token}`;

    const logout = async () => {
        await http
            .post("/auth/logout")
            .then(() => {
                // Clear CSRF token cookie and remove the token from local storage
                document.cookie =
                    "csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                localStorage.removeItem("token");
                navigate("/auth/login");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return {
        setToken: saveToken,
        isValidToken,
        logout,
        token,
        http,
    };
}
