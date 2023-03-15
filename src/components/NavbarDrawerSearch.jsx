import {
    Drawer,
    IconButton,
    InputBase,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BannerMan from "../assets/men-category-banner.png";
import BannerWomen from "../assets/woman.webp";
import BannerRed from "../assets/red-banner.png";
import Search from "./Search";

const NavbarDrawerSearch = ({
    open,
    setOpen,
    setNavbar,
    search,
    setSearch,
}) => {
    const handleClose = () => {
        setNavbar(true);
        setOpen(false);
        setSearch("");
    };

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    return (
        <Drawer
            anchor="top"
            sx={{
                position: "absolute",
                top: "50px",
                zIndex: "1",
            }}
            open={open}
            onClose={handleClose}>
            <Stack
                sx={{
                    minHeight: { xs: "400px", md: "0px" },
                    height: { md: "400px" },
                }}
                mt="80px"
                alignItems="center"
                pb="20px">
                <Paper
                    component="form"
                    elevation={0}
                    square
                    sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "90vw", md: "700px" },
                        paddingX: "0",
                        backgroundColor: "#F5F5F5",
                    }}>
                    <IconButton
                        sx={{ p: "10px", fontSize: "1.5rem" }}
                        aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: "5px", flex: 1 }}
                        placeholder="Search"
                        value={search}
                        inputProps={{ "aria-label": "search" }}
                        onChange={handleInput}
                    />
                </Paper>

                {search === "" ? (
                    <>
                        <Typography
                            sx={{ width: { xs: "90vw", md: "700px" } }}
                            mt="30px"
                            mb="15px">
                            Trending Searches:
                        </Typography>
                        <Stack
                            direction="row"
                            gap="20px"
                            sx={{
                                flexWrap: { xs: "wrap", md: "nowrap" },
                                width: { xs: "90vw", md: "700px" },
                                justifyContent: { sm: "space-between" },
                            }}>
                            <Stack
                                className="banner-categories"
                                direction="row"
                                alignItems="center"
                                paddingY="5px"
                                sx={{ cursor: "pointer" }}
                                onClick={() => setSearch("Polo Shirt")}>
                                <SearchIcon sx={{ mr: "5px" }} />
                                Polo Shirt
                            </Stack>
                            <Stack
                                className="banner-categories"
                                direction="row"
                                alignItems="center"
                                paddingY="5px"
                                sx={{ cursor: "pointer" }}
                                onClick={() => setSearch("Sunglasses")}>
                                <SearchIcon sx={{ mr: "5px" }} />
                                Sunglasses
                            </Stack>
                            <Stack
                                className="banner-categories"
                                direction="row"
                                alignItems="center"
                                paddingY="5px"
                                sx={{ cursor: "pointer" }}
                                onClick={() => setSearch("Cashmere Sweater")}>
                                <SearchIcon sx={{ mr: "5px" }} />
                                Cashmere Sweater
                            </Stack>
                            <Stack
                                className="banner-categories"
                                direction="row"
                                alignItems="center"
                                paddingY="5px"
                                sx={{ cursor: "pointer" }}
                                onClick={() => setSearch("Loafer")}>
                                <SearchIcon sx={{ mr: "5px" }} />
                                Loafer
                            </Stack>
                            <Stack
                                className="banner-categories"
                                direction="row"
                                alignItems="center"
                                paddingY="5px"
                                sx={{ cursor: "pointer" }}
                                onClick={() => setSearch("Wool-Blend Jacket")}>
                                <SearchIcon sx={{ mr: "5px" }} />
                                Wool-Blend Jacket
                            </Stack>
                        </Stack>
                        <Typography
                            sx={{ width: { xs: "90vw", md: "700px" } }}
                            mt="30px"
                            mb="15px">
                            Categories to Explore:
                        </Typography>
                        <Stack
                            sx={{
                                gap: { xs: "5px", lg: "40px" },
                                flexDirection: { xs: "column", md: "row" },
                            }}>
                            <Link
                                to="/e-commerce/men-category"
                                onClick={() => setOpen(false)}
                                style={{
                                    textDecoration: "none",
                                    color: "#000",
                                }}>
                                <Stack className="search">
                                    <img src={BannerMan} alt="banner man" />
                                    <Typography
                                        position="absolute"
                                        color="white"
                                        fontSize="1.5rem">
                                        For Him
                                    </Typography>
                                </Stack>
                            </Link>
                            <Link
                                to="/e-commerce/women-category"
                                onClick={() => setOpen(false)}
                                style={{
                                    textDecoration: "none",
                                    color: "#000",
                                }}>
                                <Stack className="search">
                                    <img src={BannerWomen} alt="banner women" />
                                    <Typography
                                        position="absolute"
                                        color="white"
                                        fontSize="1.5rem">
                                        For Her
                                    </Typography>
                                </Stack>
                            </Link>
                            <Link
                                to="/e-commerce/for-sale"
                                onClick={() => setOpen(false)}
                                style={{
                                    textDecoration: "none",
                                    color: "#000",
                                }}>
                                <Stack
                                    className="search"
                                    backgroundColor="#ad0505">
                                    <img src={BannerRed} alt="banner red" />
                                    <Typography
                                        position="absolute"
                                        color="white"
                                        fontSize="1.5rem">
                                        For Sale
                                    </Typography>
                                </Stack>
                            </Link>
                        </Stack>
                    </>
                ) : (
                    <Search search={search} handleClose={handleClose} />
                )}
            </Stack>
        </Drawer>
    );
};

export default NavbarDrawerSearch;
