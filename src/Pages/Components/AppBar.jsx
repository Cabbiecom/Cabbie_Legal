import React, { useState } from "react";
import {
    Typography,
    Box,
    AppBar,
    Toolbar,
    MenuItem,
    Menu,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";

const AppBarComponent = () => {
    //Navegation
    const navigateanv = useNavigate();
    //Configuracion de la funcione del manú
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    // Usa useMediaQuery para verificar el tamaño de la pantalla
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar
            position="sticky"
            sx={{ background: "transparent", boxShadow: "none" }}
        >
            <Toolbar
                sx={{
                    color: "#000",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h6"
                    component="h6"
                    gutterBottom
                    sx={{
                        color: "#000",
                        display: "flex",
                        cursor: "pointer",
                        justifyContent: "center",
                        alignContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                    }}
                    onClick={() => {
                        navigateanv("/");
                    }}
                >
                    Cabbie
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem>
                                <Link to="/">
                                    Términos y Condiciones
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/Privacy">Privacidad</Link>
                            </MenuItem>
                            <MenuItem >
                                <Link to="/Tutorial">Tutorial </Link>
                            </MenuItem>
                            <MenuItem >
                                <Link to="/About">Acerca de </Link>
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Box
                        style={{
                            color: "#000",
                            display: "flex",
                            justifyContent: "space-between",
                            width: "500px",
                        }}
                    >
                        <Link to="/" >
                            Términos y Condiciones
                        </Link>
                        <Link to="/Privacy"
                        >
                            Privacidad
                        </Link>
                        <Link to="/Tutorial"  >
                            Tutorial
                        </Link>
                        <Link to="/About"  >
                            Acerca de
                        </Link>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
