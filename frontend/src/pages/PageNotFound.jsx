import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function PageNotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            {/* Page Not Found Heading */}
            <Typography variant="h3" gutterBottom>
                404 - Page Not Found
            </Typography>
            {/* add a svg file from /public/PageNotFound.svg */}
            {/* Page Not Found Description */}
            <Typography variant="h5" gutterBottom>
                The page you are looking for does not exist.
            </Typography>
            {/* Button to Navigate to Home */}
            <Button component={Link} to="/" variant="contained" sx={{ backgroundColor: '#01C38D' }}>
                Go to Home
            </Button>
            <br />
            <img
                src="/PageNotFound.svg"
                alt="Page Not Found"
                width="40%"
                height="40%"
            />
        </div>
    );
}
