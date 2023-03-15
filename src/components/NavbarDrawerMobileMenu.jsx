import { Drawer, List, ListItem, Typography, Divider } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PercentIcon from "@mui/icons-material/Percent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from "react-router-dom";

const NavbarDrawerMobileMenu = ({ open, setOpen, setHamburger, setNavbar }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
        setHamburger(false);
        setNavbar(true);
    };
    return (
        <Drawer
            anchor="right"
            sx={{
                position: "absolute",
                zIndex: "1",
            }}
            open={open}
            onClose={handleClose}>
            <List
                sx={{
                    marginTop: "65px",
                    width: { xs: "100vw", sm: "auto" },
                    color: "#041e3a",
                }}>
                <Divider />
                <ListItem
                    sx={{ p: "20px" }}
                    onClick={() => {
                        handleClose();
                        navigate("/e-commerce/");
                    }}>
                    <HomeIcon
                        sx={{
                            fontSize: "1.4rem",
                            marginRight: "20px",
                            opacity: "0.7",
                        }}
                    />
                    <Typography fontSize="1.2rem">Home Page</Typography>
                </ListItem>
                <Divider />
                <ListItem
                    sx={{ p: "20px" }}
                    onClick={() => {
                        handleClose();
                        navigate("/e-commerce/men-category");
                    }}>
                    <PersonIcon
                        sx={{
                            fontSize: "1.4rem",
                            marginRight: "20px",
                            opacity: "0.7",
                        }}
                    />
                    <Typography fontSize="1.2rem">Men</Typography>
                </ListItem>
                <Divider />
                <ListItem sx={{ p: "20px" }}>
                    <PersonIcon
                        sx={{
                            fontSize: "1.4rem",
                            marginRight: "20px",
                            opacity: "0.7",
                        }}
                    />
                    <Typography
                        fontSize="1.2rem"
                        onClick={() => {
                            handleClose();
                            navigate("/e-commerce/women-category");
                        }}>
                        Women
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem sx={{ p: "20px" }}>
                    <PercentIcon
                        sx={{
                            fontSize: "1.4rem",
                            marginRight: "20px",
                            opacity: "0.7",
                        }}
                    />
                    <Typography
                        fontSize="1.2rem"
                        onClick={() => {
                            handleClose();
                            navigate("/e-commerce/for-sale");
                        }}>
                        For Sale
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem sx={{ p: "20px" }}>
                    <FavoriteBorderIcon
                        sx={{
                            fontSize: "1.4rem",
                            marginRight: "20px",
                            opacity: "0.7",
                        }}
                    />
                    <Typography
                        fontSize="1.2rem"
                        onClick={() => {
                            handleClose();
                            navigate("/e-commerce/wishlist");
                        }}>
                        Wishlist
                    </Typography>
                </ListItem>
                <Divider />
            </List>
        </Drawer>
    );
};

export default NavbarDrawerMobileMenu;
