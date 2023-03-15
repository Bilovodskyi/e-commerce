import { Stack, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import LogoBlue from "../assets/logo-blue.png";
import LogoWhite from "../assets/logo-white.png";
import { Link, useLocation } from "react-router-dom";
import NavbarDrawerCountry from "./NavbarDrawerCountry";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavbarDrawerCart from "./NavbarDrawerCart";
import { useSelector } from "react-redux";
import NavbarDrawerSearch from "./NavbarDrawerSearch";
import NavbarDrawerMobileMenu from "./NavbarDrawerMobileMenu";

const Navbar = () => {
    const [countryDrawer, setCountryDrawer] = useState(false);
    const [cartDrawer, setCartDrawer] = useState(false);
    const [searchDrawer, setSearchDrawer] = useState(false);
    const [menuDrawer, setMenuDrawer] = useState(false);
    const [navbar, setNavbar] = useState(true);
    const [search, setSearch] = useState("");
    const [hamburger, setHamburger] = useState(false);

    const products = useSelector((state) => state.cart.products);
    const regionPicked = useSelector((state) => state.currency.region);
    const location = useLocation();

    const totalItems = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity));
        return total;
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            right: -3,
            top: 13,
            backgroundColor: "#DC965A",
            padding: "0 4px",
            color: "#fff",
        },
    }));

    const DesktopStack = styled(Stack)(({ theme }) => ({
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    }));

    const MobileStack = styled(Stack)(({ theme }) => ({
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    }));

    const handleOpenSearch = () => {
        setSearch("");
        setNavbar(false);
        setSearchDrawer((prev) => !prev);
    };

    const handleNavbarChange = () => {
        if (window.scrollY >= 20) {
            setNavbar(false);
        } else {
            setNavbar(true);
        }
    };

    const handleHoverEnter = () => {
        if (window.scrollY >= 20 || searchDrawer) {
            return;
        } else {
            setNavbar(false);
        }
    };

    const handleHoverLeave = () => {
        if (window.scrollY >= 20 || searchDrawer) {
            return;
        } else {
            setNavbar(true);
        }
    };

    window.addEventListener("scroll", handleNavbarChange);

    return (
        <>
            <NavbarDrawerCountry
                open={countryDrawer}
                setOpen={setCountryDrawer}
            />
            <NavbarDrawerCart
                open={cartDrawer}
                setOpen={setCartDrawer}
                totalItems={totalItems}
            />
            <NavbarDrawerSearch
                open={searchDrawer}
                setOpen={setSearchDrawer}
                setNavbar={setNavbar}
                search={search}
                setSearch={setSearch}
            />
            <NavbarDrawerMobileMenu
                open={menuDrawer}
                setOpen={setMenuDrawer}
                setHamburger={setHamburger}
                setNavbar={setNavbar}
            />
            <Stack
                className={
                    navbar &&
                    !location.pathname.includes("/e-commerce/product/")
                        ? "navbar"
                        : "navbar white"
                }
                zIndex="2"
                direction="row"
                top="0"
                left="0"
                right="0"
                alignItems="center"
                sx={{
                    p: { xs: "25px", md: " 25px 40px" },
                    justifyContent: { xs: "end", md: "space-between" },
                }}
                position="fixed"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}>
                <DesktopStack direction="row" gap="20px" zIndex="2">
                    <Stack direction="row" gap="20px" alignItems="center">
                        <Link
                            to="/e-commerce/"
                            onClick={() => setSearchDrawer(false)}
                            style={{
                                textDecoration: "none",
                                color:
                                    navbar &&
                                    !location.pathname.includes(
                                        "/e-commerce/product/"
                                    )
                                        ? "white"
                                        : "#041e3a",
                            }}>
                            Home Page
                        </Link>
                        <Link
                            to="/e-commerce/men-category"
                            onClick={() => setSearchDrawer(false)}
                            style={{
                                textDecoration: "none",
                                color:
                                    navbar &&
                                    !location.pathname.includes(
                                        "/e-commerce/product/"
                                    )
                                        ? "white"
                                        : "#041e3a",
                            }}>
                            Men
                        </Link>
                        <Link
                            to="/e-commerce/women-category"
                            onClick={() => setSearchDrawer(false)}
                            style={{
                                textDecoration: "none",
                                color:
                                    navbar &&
                                    !location.pathname.includes(
                                        "/e-commerce/product/"
                                    )
                                        ? "white"
                                        : "#041e3a",
                            }}>
                            Women
                        </Link>
                        <Link
                            to="/e-commerce/for-sale"
                            onClick={() => setSearchDrawer(false)}
                            style={{
                                textDecoration: "none",
                                color:
                                    navbar &&
                                    !location.pathname.includes(
                                        "/e-commerce/product/"
                                    )
                                        ? "white"
                                        : "#041e3a",
                            }}>
                            For Sale
                        </Link>
                    </Stack>
                </DesktopStack>
                <Stack
                    fontSize="2rem"
                    alignItems="center"
                    position="absolute"
                    sx={{ right: { md: "0" }, left: { xs: "25px", md: "0" } }}>
                    <Link
                        to="/e-commerce/"
                        onClick={() => setSearchDrawer(false)}
                        style={{
                            height: "40px",
                        }}>
                        {navbar &&
                        !location.pathname.includes("/e-commerce/product/") ? (
                            <img
                                src={LogoWhite}
                                alt="logo"
                                style={{ height: "100%" }}
                            />
                        ) : (
                            <img
                                src={LogoBlue}
                                alt="logo"
                                style={{ height: "100%" }}
                            />
                        )}
                    </Link>
                </Stack>
                <Stack
                    direction="row"
                    gap="20px"
                    alignItems="center"
                    zIndex="3">
                    <DesktopStack direction="row" alignItems="center">
                        <Typography
                            fontSize="0.8rem"
                            sx={{ cursor: "pointer" }}
                            onClick={() => setCountryDrawer(true)}>
                            {regionPicked.country}
                        </Typography>
                        <ExpandMoreIcon fontSize="0.8rem" />
                    </DesktopStack>
                    <Link
                        to="/e-commerce/wishlist/"
                        onClick={() => setSearchDrawer(false)}
                        style={{
                            textDecoration: "none",
                            color:
                                navbar &&
                                !location.pathname.includes(
                                    "/e-commerce/product/"
                                )
                                    ? "white"
                                    : "#041e3a",
                        }}>
                        <DesktopStack>
                            <FavoriteBorderIcon sx={{ fontSize: "1.2rem" }} />
                        </DesktopStack>
                    </Link>
                    <MobileStack
                        className={hamburger ? "hamburger active" : "hamburger"}
                        onClick={() => {
                            setHamburger((prev) => !prev);
                            setMenuDrawer((prev) => !prev);
                        }}>
                        <Box className="hamburger-bar"></Box>
                        <Box className="hamburger-bar"></Box>
                        <Box className="hamburger-bar"></Box>
                    </MobileStack>
                    <SearchIcon
                        sx={{ fontSize: "1.2rem", cursor: "pointer" }}
                        onClick={handleOpenSearch}
                    />
                    <IconButton
                        aria-label="cart"
                        sx={{ p: "0" }}
                        onClick={() => setCartDrawer(true)}>
                        <StyledBadge badgeContent={totalItems()}>
                            <ShoppingCartIcon
                                style={{
                                    fontSize: "1.2rem",
                                    color:
                                        navbar &&
                                        !location.pathname.includes(
                                            "/e-commerce/product/"
                                        )
                                            ? "white"
                                            : "#041e3a",
                                }}
                            />
                        </StyledBadge>
                    </IconButton>
                </Stack>
            </Stack>
        </>
    );
};

export default Navbar;
