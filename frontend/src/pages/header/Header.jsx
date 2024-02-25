import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Login from '../login/Login';
import Auth from '../../components/Auth';


export default function Header() {
    const pages = ['Home', 'Blog', 'About Us', 'Contact', 'Login'];
    const { http, isValidToken } = Auth();
    const navigate = useNavigate();

    const [isAdmin, setIsAdmin] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [anchorElNav, setAnchorElNav] = useState(null);

    if (localStorage.getItem('token')) {
        pages.pop();
        pages.push('Payment');
        pages.push('Logout');
    } else {
        pages.pop();
        pages.push('Login');
    }

    useEffect(() => {
        const checkAdminStatus = async () => {
            try {
                if (isValidToken(localStorage.getItem('token'))) {
                    const response = await http.get("/auth/verify-admin");
                    setIsAdmin(response.status === 200);
                }
            } catch (error) {
                setIsAdmin(false);
            }
        };

        checkAdminStatus();
    }, [localStorage.getItem('token')]);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleLogin = () => {
        setOpenLogin(!openLogin);
    };

    const handleCloseNavMenu = async (page) => {
        setAnchorElNav(null);
        if (page === 'Login') {
            handleLogin();
        } else if (page === 'Home') {
            navigate("/");
        } else if (page === 'Blog') {
            navigate("/blog");
        } else if (page === 'About Us') {
            navigate("/about");
        } else if (page === 'Contact') {
            navigate("/contact");
        } else if (page === 'Payment') {
            navigate(isAdmin ? "/admin-payment" : "/payment");
        } else if (page === 'Logout') {
            try {
                await http
                    .post("/auth/logout")
                    .then((res) => {
                        localStorage.removeItem('token');
                        toast.success("Logout Success!");
                        navigate("/");
                    }).catch((err) => {
                        toast.error(err.response.data.message);
                    });
            } catch (error) {
                toast.error(error);
            }
        };
    };

    return (
        <AppBar position="fixed" sx={{ background: 'rgba(25, 30, 41, 0.4)', backgroundColor: '#191E29', top: 0, zIndex: 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#01C38D' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 10,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Arial',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: '#01C38D',
                            textDecoration: 'none',
                        }}
                    >
                        Finance
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, '&:hover': { backgroundColor: '#132D46' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} sx={{ '&:hover': { backgroundColor: '#01C38D' } }} onClick={() => handleCloseNavMenu(page)}>
                                    <Typography textAlign="center" sx={{ color: 'black', display: 'block', font: 'bold' }}>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Login open={openLogin} handleLogin={handleLogin} />
                    </Box>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            fontFamily: 'Arial',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: '#01C38D',
                            textDecoration: 'none',
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                        }}
                    >
                        Finance
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: '#FFFFFF', display: 'block', '&:hover': { backgroundColor: '#01C38D' } }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
