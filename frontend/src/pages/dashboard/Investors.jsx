import { useState } from 'react';
import { Typography, Paper, Container, Box, useTheme } from '@mui/material';

export default function Investors() {
    const [investorsData, setInvestorsData] = useState([0, 1, 2]);
    const theme = useTheme();
    const isMobile = theme.breakpoints.down('sm');

    const handleHover = (index) => {
        const updatedInvestorsData = [...investorsData];
        updatedInvestorsData[index] += 1;
        setInvestorsData(updatedInvestorsData);
    };

    return (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                backgroundColor: '#D3D3D3',
                minHeight: '50vh',
                width: '100%', // Set width to 100%
                overflowX: 'auto', // Enable horizontal scrolling if needed
            }}
        >
            <Typography variant="h4" align="center" sx={{ marginBottom: 3, color: '#01C38D' }}>
                Our Investing Areas
            </Typography>

            <Box
                display="flex"
                justifyContent={isMobile ? 'center' : 'flex-start'} // Adjust justification based on screen size
                flexDirection={isMobile ? 'column' : 'row'} // Adjust flex direction based on screen size
                alignItems={isMobile ? 'center' : 'flex-start'} // Adjust alignment based on screen size
                flexWrap="wrap"
            >
                {investorsData.map((value, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        sx={{
                            width: isMobile ? '80%' : '150px', // Adjust width for mobile view
                            height: '150px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: isMobile ? '8px 0' : '0 8px', // Adjust margin for mobile view
                            backgroundColor: '#191E29',
                            color: '#FFFFFF',
                            transition: 'background-color 0.3s',
                            '&:hover': {
                                backgroundColor: '#132D46',
                            },
                        }}
                        onMouseEnter={() => handleHover(index)}
                    >
                        <Typography variant="h5">{value}</Typography>
                    </Paper>
                ))}
            </Box>
        </Container>
    );
};
