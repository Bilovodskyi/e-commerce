import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import BannerWomen from "../assets/women-banner.png";
import BannerMen from "../assets/man-banner.png";
import BannerRed from "../assets/red-banner.png";
import { useNavigate } from "react-router-dom";

const BannerCategories = () => {
    const navigate = useNavigate();
    return (
        <Stack
            className="scroll-to-bottom"
            sx={{ marginTop: { xs: "20px", md: "40px" } }}>
            <Stack gap="10px">
                <Box
                    height="500px"
                    backgroundColor="#AD0505"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <img
                        src={BannerRed}
                        alt="banner red"
                        style={{ height: "500px" }}
                    />
                </Box>
                <Typography
                    textAlign="center"
                    mt="10px"
                    fontSize="1.75rem"
                    fontWeight="500">
                    THE DESIGNER SALE
                </Typography>
                <Typography textAlign="center" mt="10px">
                    Seasonal sales. Enjoy reductions of up to 30%
                </Typography>
                <Stack
                    direction="row"
                    alignItems="end"
                    justifyContent="center"
                    sx={{ cursor: "pointer" }}>
                    <Typography
                        className="banner-categories"
                        textAlign="center"
                        mt="10px"
                        onClick={() => navigate("/e-commerce/for-sale")}>
                        Shop the collection
                    </Typography>
                    <ArrowOutwardSharpIcon />
                </Stack>
            </Stack>
            <Stack
                // direction="row"
                justifyContent="center"
                sx={{
                    flexDirection: { md: "row" },
                    marginTop: { xs: "25px", md: "50px" },
                    gap: { md: "10px" },
                }}>
                <Stack sx={{ width: { md: "50%" } }}>
                    <Box className="banner-him-her" height="500px">
                        <img src={BannerMen} alt="banner men" />
                    </Box>
                    <Typography
                        textAlign="center"
                        mt="10px"
                        fontSize="1.75rem"
                        fontWeight="500">
                        FOR HIM
                    </Typography>
                    <Typography textAlign="center" mt="10px">
                        Men's Category. Clothing and accessories for him
                    </Typography>
                    <Stack
                        direction="row"
                        alignItems="end"
                        justifyContent="center"
                        sx={{ cursor: "pointer" }}>
                        <Typography
                            className="banner-categories"
                            textAlign="center"
                            mt="10px"
                            onClick={() =>
                                navigate("/e-commerce/men-category")
                            }>
                            Shop the collection
                        </Typography>
                        <ArrowOutwardSharpIcon />
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        width: { md: "50%" },
                        marginTop: { xs: "25px", md: "0" },
                    }}>
                    <Box className="banner-him-her" height="500px">
                        <img src={BannerWomen} alt="banner women" />
                    </Box>
                    <Typography
                        textAlign="center"
                        mt="10px"
                        fontSize="1.75rem"
                        fontWeight="500">
                        FOR HER
                    </Typography>
                    <Typography textAlign="center" mt="10px">
                        Women's Category. Clothing and accessories for her
                    </Typography>
                    <Stack
                        direction="row"
                        alignItems="end"
                        justifyContent="center"
                        sx={{ cursor: "pointer" }}>
                        <Typography
                            className="banner-categories"
                            textAlign="center"
                            mt="10px"
                            onClick={() =>
                                navigate("/e-commerce/women-category")
                            }>
                            Shop the collection
                        </Typography>
                        <ArrowOutwardSharpIcon />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default BannerCategories;
