// import * as React from "react";
// import { TextField, Button, Typography } from "@mui/material";

// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © Finance '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// export default function Footer() {
//     return (
//         <div style={{ background: "#2D3250", width: "100%", overflowX: "hidden" }}>
//             <div
//                 className="footer"
//                 style={{
//                     height: "330px",
//                     padding: "20px", // Add padding for better spacing
//                     boxSizing: "border-box", // Include padding in total height
//                 }}
//             >
//                 <div
//                     style={{
//                         color: "white",
//                     }}
//                 >
//                     <h1
//                         style={{
//                             color: "green",
//                             marginBottom: "20px",
//                         }}
//                     >
//                         Finance
//                     </h1>
//                     <div style={{ display: "flex", flexWrap: "wrap" }}>
//                         <div style={{ flex: "1", minWidth: "200px", marginRight: "20px" }}>
//                             <h2>Contact Us</h2>
//                             <ul>
//                                 <li>
//                                     <i className="fa-solid fa-location-dot"></i> Sector 130, Noida,
//                                     UP, India
//                                 </li>
//                                 <li>
//                                     <i className="fa-solid fa-phone"></i> +91 9060324511
//                                 </li>
//                                 <li>
//                                     <i className="fa-solid fa-envelope"></i> teamchinar@gmail.com
//                                 </li>
//                             </ul>
//                         </div>
//                         <div style={{ flex: "1", minWidth: "200px", marginRight: "20px" }}>
//                             <h2>Important Links</h2>
//                             <ul>
//                                 <li>
//                                     <a>About us</a>
//                                 </li>
//                                 <li>
//                                     <a>Our services</a>
//                                 </li>
//                                 <li>
//                                     <a>Privacy policy</a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div style={{ flex: "1", minWidth: "200px" }}>
//                             <div style={{ textAlign: "center" }}>
//                                 <h2>Subscribe to our newsletter</h2>
//                                 <TextField
//                                     style={{ background: "white", margin: "10px", width: "80%" }}
//                                     placeholder="Your Email here"
//                                     hiddenLabel
//                                     id="filled-hidden-label-small"
//                                     defaultValue=""
//                                     variant="filled"
//                                     size="small"
//                                 />
//                                 <Button variant="contained" style={{ background: "#7E2553" }}>
//                                     Subscribed
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     color: "white",
//                     flexDirection: "column",
//                     padding: "20px", // Add padding for better spacing
//                     boxSizing: "border-box", // Include padding in total height
//                 }}
//             >
//                 <div >
//                     <div className="rounded-social-buttons">
//                         <a className="social-button" href="https://www.facebook.com/" target="_blank">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="32px" height="32px">
//                                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM14.55 7H12V5c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2H6v2h2v7h3v-7h2.55L12 9.62z" />
//                             </svg>
//                         </a>
//                         <a className="social-button" href="https://www.twitter.com/" target="_blank">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="32px" height="32px">
//                                 <path d="M22.46 6c-.8.36-1.58.62-2.42.73.87-.52 1.54-1.34 1.85-2.32-.81.48-1.7.83-2.66 1.02-.77-.81-1.87-1.31-3.07-1.31-2.32 0-4.2 1.88-4.2 4.2 0 .33.04.65.1.96-3.49-.18-6.58-1.85-8.66-4.38-.36.61-.56 1.32-.56 2.09 0 1.45.74 2.73 1.86 3.48-.68-.02-1.31-.21-1.87-.52v.05c0 2.03 1.45 3.72 3.36 4.11-.35.09-.72.14-1.11.14-.27 0-.54-.03-.8-.08.54 1.68 2.09 2.9 3.94 2.93-1.44 1.13-3.26 1.81-5.24 1.81-.34 0-.68-.02-1.02-.06 1.87 1.2 4.1 1.9 6.49 1.9 7.78 0 12.02-6.45 12.02-12.02 0-.18 0-.35-.01-.53.82-.58 1.55-1.3 2.12-2.12z" />
//                             </svg>
//                         </a>
//                         <a className="social-button" href="https://www.linkedin.com/" target="_blank">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="32px" height="32px">
//                                 <path d="M21.3 0H2.7C1.22 0 0 1.22 0 2.7v18.6C0 22.78 1.22 24 2.7 24H21.3C22.78 24 24 22.78 24 21.3V2.7C24 1.22 22.78 0 21.3 0zM7.95 20.1H4.05V9.36h3.9v10.74zM5.97 8.19a1.97 1.97 0 1 0-.002-3.94A1.97 1.97 0 0 0 5.97 8.19zM20.1 20.1h-3.9v-5.76c0-1.38-.03-3.15-1.92-3.15-1.93 0-2.23 1.51-2.23 3.06v6.85H8.1V9.36h3.8v1.62h.05c.53-.99 1.83-2.04 3.75-2.04 4.02 0 4.75 2.64 4.75 6.07v6.1z" />
//                             </svg>
//                         </a>
//                         <a className="social-button" href="https://www.youtube.com/" target="_blank">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="32px" height="32px">
//                                 <path d="M23.73 6.37c-.26-1.91-1.04-3.4-2.1-4.47C20.48 1.26 12 1 12 1S3.52 1.26 2.37 1.9C1.3 2.97.52 4.46.26 6.37.1 7.93.01 9.5.01 11.08s.09 3.15.25 4.7c.25 1.9 1.04 3.38 2.1 4.45C3.52 22.74 12 23 12 23s8.48-.26 9.63-.9c1.07-1.07 1.85-2.56 2.1-4.45.15-1.55.24-3.12.24-4.7s-.09-3.15-.24-4.7zM9.5 15.5V8.92l6.58 3.29-6.58 3.29z" />
//                             </svg>
//                         </a>
//                         <a className="social-button" href="https://www.instagram.com/" target="_blank">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="pink" width="32px" height="32px">
//                                 <g>
//                                     <circle cx="12" cy="12" r="3.2" />
//                                     <path d="M9 2L7.17 4H4c-1.11 0-2 .89-2 2v3.17L2 11l1 1v7c0 1.11.89 2 2 2h3.17L9 22l1-1h3.17L15 20H20c1.11 0 2-.89 2-2V11l-1-1v-3c0-1.11-.89-2-2-2h-3.17L15 2H9z" />
//                                 </g>
//                             </svg>
//                         </a>
//                     </div>
//                 </div>
//                 <Copyright sx={{ mt: 8, mb: 4, color: '#FFFFFF', fontSize: '16px' }} />
//             </div>
//         </div>
//     )
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
    width: '140px',
    height: 'auto',
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://mui.com/">Sitemark&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <div style={{ background: "#2D3250", width: "100%", overflowX: "hidden", color: 'white' }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 8, sm: 10 },
                    textAlign: { sm: 'center', md: 'left' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            minWidth: { xs: '100%', sm: '60%' },
                        }}
                    >
                        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                            <Box sx={{ ml: '-15px' }}>
                                <img
                                    src={
                                        'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                                    }
                                    style={logoStyle}
                                    alt="logo of sitemark"
                                />
                            </Box>
                            <Typography variant="body2" fontWeight={600} gutterBottom>
                                Newsletter
                            </Typography>
                            <Typography variant="body2" mb={2}>
                                Subscribe to our newsletter for weekly updates and promotions.
                            </Typography>
                            <Stack direction="row" spacing={1} useFlexGap>
                                <TextField
                                    id="outlined-basic"
                                    hiddenLabel
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    aria-label="Enter your email address"
                                    placeholder="Your email address"
                                    inputProps={{
                                        autocomplete: 'off',
                                        ariaLabel: 'Enter your email address',
                                    }}
                                />
                                <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                                    Subscribe
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Product
                        </Typography>
                        <Link href="#">
                            Features
                        </Link>
                        <Link href="#">
                            Testimonials
                        </Link>
                        <Link href="#">
                            Highlights
                        </Link>
                        <Link href="#">
                            Pricing
                        </Link>
                        <Link href="#">
                            FAQs
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Company
                        </Typography>
                        <Link href="#">
                            About us
                        </Link>
                        <Link href="#">
                            Careers
                        </Link>
                        <Link href="#">
                            Press
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Legal
                        </Typography>
                        <Link href="#">
                            Terms
                        </Link>
                        <Link href="#">
                            Privacy
                        </Link>
                        <Link href="#">
                            Contact
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: { xs: 4, sm: 8 },
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <div>
                        <Link href="#">
                            Privacy Policy
                        </Link>
                        <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link href="#">
                            Terms of Service
                        </Link>
                        <Copyright />
                    </div>
                    <Stack
                        direction="row"
                        justifyContent="left"
                        spacing={1}
                        useFlexGap
                        sx={{
                            color: 'text.secondary',
                        }}
                    >
                        <IconButton
                            color="inherit"
                            href="https://github.com/mui"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://twitter.com/MaterialUI"
                            aria-label="X"
                            sx={{ alignSelf: 'center' }}
                        >
                            <TwitterIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://www.linkedin.com/company/mui/"
                            aria-label="LinkedIn"
                            sx={{ alignSelf: 'center' }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </div>
    );
}