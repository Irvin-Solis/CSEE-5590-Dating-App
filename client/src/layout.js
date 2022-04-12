import React, { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import DarkTheme from "./darkTheme";
import makeStyles from '@mui/styles/makeStyles';
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
}));

function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}


export default function Layout(props) {
    const classes = useStyles();
    const navigate = useNavigate();
    const [darkState, setDarkState] = useState(false);
    const darkTheme = DarkTheme(darkState);

    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    const redirect = (link) => {
        navigate(link)
    }

    return (
        <Suspense
        fallback={
            <CircularProgress
            justifycontent="center"
            style={{ marginTop: "25%", marginBottom: "30%", marginLeft: "50%" }}
            color="inherit"
            />
        }
        >
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                    <Typography href="/" variant="h6" className={classes.title} onClick={()=>{redirect('/')}}>
                        UMKC Community <SchoolIcon />
                    </Typography>

                    <Button sx={{ my: 1, color: 'white', display: 'block' }} onClick={ ()=>{redirect('/discussion')}}>
                        Discussions
                    </Button>
                    <Button sx={{ my: 1, color: 'white', display: 'block' }} onClick={ ()=>{redirect('/signin')}}>
                        Sign in
                    </Button>
                    
                    {darkState ? <Brightness7Icon onClick={handleThemeChange} /> : <Brightness4Icon onClick={handleThemeChange} />}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Container style={{ marginTop: "2%", marginBottom: "18%" }}>
                {props.children}
            </Container>
            
            </ThemeProvider>
        </StyledEngineProvider>
        </Suspense>
    );
}