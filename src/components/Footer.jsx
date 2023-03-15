import {
    Stack,
    Typography,
    Box,
    TextField,
    Button,
    Alert,
} from "@mui/material";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LogoIcon from "../assets/logo.png";
import Snackbar from "@mui/material/Snackbar";

const Footer = () => {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [message, setMessage] = useState(false);
    const vertical = "top";
    const horizontal = "center";

    const handleClick = () => {
        setMessage(true);
        setNewsletterEmail("");
        setTimeout(() => {
            handleClose();
        }, 3000);
    };

    const handleClose = () => {
        setMessage(false);
    };

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={message}
                onClose={handleClose}>
                <Alert severity="info" sx={{ width: "300px" }}>
                    Thank you! You will receive the latest updates
                </Alert>
            </Snackbar>
            <Stack
                height="100px"
                borderBottom="1px solid #ccc"
                borderTop="1px solid #ccc"
                justifyContent="center"
                alignItems="center"
                sx={{
                    flexDirection: { md: "row" },
                    marginTop: { xs: "10px", md: "50px" },
                }}>
                <Typography
                    sx={{
                        fontSize: { md: "1.5rem" },
                        marginRight: { md: "140px" },
                        marginBottom: { xs: "10px", md: "0px" },
                    }}>
                    Subscribe to our Newsletter
                </Typography>
                <Box sx={{ marginBottom: { xs: "10px", md: "0px" } }}>
                    <TextField
                        sx={{
                            width: { xs: "250px", md: "300px" },
                            "& fieldset": { borderRadius: "0px" },
                        }}
                        size="small"
                        label="Your Email"
                        variant="outlined"
                        value={newsletterEmail}
                        onChange={(newValue) =>
                            setNewsletterEmail(newValue.target.value)
                        }
                    />
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        sx={{
                            fontSize: { xs: "0.65rem", md: "0.8rem" },
                            backgroundColor: "primary",
                            borderRadius: "0",
                            textTransform: "none",
                            "&:hover": { backgroundColor: "primary" },
                        }}>
                        Subscribe
                    </Button>
                </Box>
            </Stack>
            <Stack
                gap="30px"
                sx={{
                    margin: { xs: "30px 40px", md: "50px 150px 35px" },
                    flexDirection: { md: "row" },
                }}>
                <Box
                    flex="1"
                    display="flex"
                    flexDirection="row"
                    sx={{ textAlign: { xs: "center", md: "start" } }}>
                    <Stack flex="1" gap="7px">
                        <Typography fontSize="1rem" fontWeight="600">
                            Categories
                        </Typography>
                        <Typography>Men</Typography>
                        <Typography>Women</Typography>
                        <Typography>Accessories</Typography>
                        <Typography>New Arrivals</Typography>
                    </Stack>
                    <Stack flex="1" gap="7px">
                        <Typography fontSize="1rem" fontWeight="600">
                            Links
                        </Typography>
                        <Typography>FAQ</Typography>
                        <Typography>Pages</Typography>
                        <Typography>Stores</Typography>
                        <Typography>Cookies</Typography>
                    </Stack>
                </Box>
                <Box
                    flex="1"
                    display="flex"
                    gap="20px"
                    sx={{ flexDirection: { xs: "column", md: "row" } }}>
                    <Stack flex="1" gap="7px">
                        <Typography fontSize="1rem" fontWeight="600">
                            About
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Magni laboriosam, voluptate saepe est corrupti
                            hic et expedita officia aperiam repellendus?
                            Temporibus praesentium voluptatum facilis eos sint
                            quisquam sequi dignissimos perspiciatis.
                        </Typography>
                    </Stack>
                    <Stack flex="1" gap="7px">
                        <Typography fontSize="1rem" fontWeight="600">
                            Contact
                        </Typography>
                        <Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Cum, commodi nemo repudiandae enim placeat
                            eligendi? Numquam, quod! Nisi aspernatur quae,
                            sapiente animi nemo architecto facere incidunt
                            praesentium aliquam sint. Quis?
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                mb="20px"
                sx={{
                    gap: { md: "50px" },
                    marginX: { xs: "40px", md: "0px" },
                    justifyContent: { xs: "space-between", md: "center" },
                }}>
                <FacebookIcon
                    sx={{
                        height: { xs: "30px", md: "20px" },
                        width: { xs: "30px", md: "20px" },
                    }}
                />
                <InstagramIcon
                    sx={{
                        height: { xs: "30px", md: "20px" },
                        width: { xs: "30px", md: "20px" },
                    }}
                />
                <TwitterIcon
                    sx={{
                        height: { xs: "30px", md: "20px" },
                        width: { xs: "30px", md: "20px" },
                    }}
                />
                <YouTubeIcon
                    sx={{
                        height: { xs: "30px", md: "20px" },
                        width: { xs: "30px", md: "20px" },
                    }}
                />
                <PinterestIcon
                    sx={{
                        height: { xs: "30px", md: "20px" },
                        width: { xs: "30px", md: "20px" },
                    }}
                />
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                    marginY: { xs: "10px", md: "20px" },
                    marginX: { xs: "40px", md: "150px" },
                }}>
                <Typography>
                    <span style={{ color: "red" }}>Disclaimer:</span> All
                    pictures and descriptions of products are borrowed from the
                    Ralph Lauren website:{" "}
                    <a
                        href="https://www.ralphlauren.com"
                        target="blank"
                        style={{ textDecoration: "underline", color: "black" }}>
                        https://www.ralphlauren.com
                    </a>{" "}
                    and were used to create this website for the purpose of
                    learning
                </Typography>
            </Stack>
            <Stack
                alignItems="center"
                justifyContent="center"
                m="20px 150px"
                gap="20px">
                <Box height="40px">
                    <img src={LogoIcon} alt="logo" style={{ height: "100%" }} />
                </Box>
                <Typography fontSize="0.6rem" color="#999">
                    February 2023
                </Typography>
            </Stack>
        </>
    );
};

export default Footer;
