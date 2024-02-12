import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Layout from '../Layout';
import Ourteam from './Ourteam';
import Investors from './Investors';
import backgroundImage from '/h.jpg'


export default function Dashboard() {
    return (
        <Layout>
            <Container
                component="main"
                maxWidth="xl"
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    justifyContent: 'center',
                    minHeight: '80vh',
                    backgroundImage: `url(${backgroundImage})`, // Use the imported image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        // backgroundColor: 'rgba(25, 30, 41,', // Set the background color with opacity
                    },
                    color: '#FFFFFF',
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                    Finance Advisory
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, mb: 4 }}>

                </Typography>
                <div
                    sx={{
                        display: 'flex',
                        flexDirection: 'row', // Align buttons horizontally
                        width: '100%', // Set width to 100%
                        justifyContent: 'center', // Center buttons horizontally
                        gap: '16px', // Add gap between buttons
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            mr: '10px',
                            borderColor: 'BLACK',
                            backgroundColor: '#01C38D',
                            color: '#191E29',
                            fontWeight: 700,
                            '&:hover': {
                                backgroundColor: 'White',
                                color: '#01C38D',
                            },
                            borderRadius: 0,
                            fontSize: '1.2rem', // Increase button size
                            flex: 1, // Make buttons flexible
                        }}
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            borderColor: 'BLACK',
                            backgroundColor: '#01C38D',
                            color: '#191E29',
                            fontWeight: 700,
                            '&:hover': {
                                backgroundColor: 'White',
                                color: '#01C38D',
                            },
                            borderRadius: 0,
                            fontSize: '1.2rem', // Increase button size
                            flex: 1, // Make buttons flexible
                        }}
                    >
                        Know More
                    </Button>
                </div>
            </Container>
            <Investors />
            <Ourteam />
        </Layout>

    );
};
