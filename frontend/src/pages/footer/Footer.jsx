import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import AdbIcon from '@mui/icons-material/Adb';
import Instagram from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import { YouTube, Facebook } from '@mui/icons-material';

const logoStyle = {
    width: '140px',
    height: 'auto',
};

function Copyright() {
    return (
        <Typography variant="body2" color='#FFFFF' mt={1}>
            {'Copyright © Finance '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <div style={{ background: 'rgba(0,0,0, 0.8)', width: "100%", overflowX: "hidden", color: 'white' }}>
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
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'Arial',
                                        fontWeight: 700,
                                        letterSpacing: '.1rem',
                                        color: '#01C38D',
                                        textDecoration: 'none',
                                        mb: 2,
                                    }}
                                >
                                    <AdbIcon sx={{ mt: 0.4 }} />
                                    Finance
                                </Typography>
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
                                        style: { color: 'white' }
                                    }}
                                />
                                <Button variant="contained" sx={{ flexShrink: 0, backgroundColor: '#01C38D' }}>
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
                        <Link color='#01C38D' href="#">
                            Features
                        </Link>
                        <Link color='#01C38D' href="#">
                            Testimonials
                        </Link>
                        <Link color='#01C38D' href="#">
                            Highlights
                        </Link>
                        <Link color='#01C38D' href="#">
                            Pricing
                        </Link>
                        <Link color='#01C38D' href="#">
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
                        <Link color='#01C38D' href="#">
                            Home
                        </Link>
                        <Link color='#01C38D' href="#">
                            Blogs
                        </Link>
                        <Link color='#01C38D' href="#">
                            About Us
                        </Link>
                        <Link color='#01C38D' href="#">
                            Contact Us
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
                        <Link color='#01C38D' href="#">
                            Terms
                        </Link>
                        <Link color='#01C38D' href="#">
                            Privacy
                        </Link>
                        <Link color='#01C38D' href="#">
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
                        <Link color='#01C38D' href="#">
                            Privacy Policy
                        </Link>
                        <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link color='#01C38D' href="#">
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
                            <Facebook />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://github.com/mui"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                        >
                            <Instagram />
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
                        <IconButton
                            color="inherit"
                            href="https://www.linkedin.com/company/mui/"
                            aria-label="LinkedIn"
                            sx={{ alignSelf: 'center' }}
                        >
                            <YouTube />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </div>
    );
}