import { Stack, Typography } from "@mui/material";
import React from "react";
import BanerOneIcon from "../assets/test.png";
import BannerText from "../assets/banner-text-white2.png";
import { Link } from "react-router-dom";

const MainBanner = () => {
    return (
        <>
            <Stack className="banner" position="relative">
                <img src={BanerOneIcon} alt="baner" />
            </Stack>
            <Stack
                position="absolute"
                className="banner-text"
                justifyContent="flex-end"
                alignItems="center"
                sx={{
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    gap: { xs: "100px", md: "60px" },
                    marginBottom: { xs: "100px", md: "60px" },
                }}>
                <img src={BannerText} alt="baner text" />

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ cursor: "pointer" }}>
                    <Typography
                        className="banner-categories white"
                        textAlign="center"
                        color="white"
                        fontSize="1.2rem"
                        mt="10px">
                        Explore
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
};

export default MainBanner;
