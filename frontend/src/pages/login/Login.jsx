import * as React from 'react';
import {
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    Box,
    Button,
    Slide,
    TextField,
    Grid,
    Link,
    InputAdornment,
    IconButton,
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify';
import { useTheme } from "@mui/material/styles";
import Auth from '../../components/Auth';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login({ open, handleLogin }) {
    const theme = useTheme();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const { http, setToken, isValidToken } = Auth();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        try {
            await http
                .post("/auth/login", { email, password })
                .then((res) => {
                    setToken(res.data.token);
                    toast.success("Login Success!");
                    e.target.reset();
                    handleLogin();
                })
                .catch((err) => {
                    toast.error(err.response.data.message);
                });
        } catch (error) {
            toast.error(error);
        }
    };

    const handleClose = () => {
        handleLogin();
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
                style: {
                    marginTop: theme.spacing(8),
                    marginBottom: theme.spacing(8),
                    width: 400,
                },
            }}
        >
            <DialogContent
                sx={{
                    margin: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <DialogTitle>{"Sign in"}</DialogTitle>
                <Box component="form" onSubmit={handleSubmit} required>
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        id="email"
                        name="email"
                        type='email'
                        label="Email Address"
                        autoComplete="email"
                    />
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        id="password"
                        name="password"
                        label="Password"
                        autoComplete="current-password"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePassword} edge="end">
                                        {showPassword ? (
                                            <VisibilityIcon />
                                        ) : (
                                            <VisibilityOffIcon />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item textAlign='end'>
                            <Link href="#" variant="body2">
                                Don't have an account?<br />Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
