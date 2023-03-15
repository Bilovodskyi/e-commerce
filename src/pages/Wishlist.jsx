import React from "react";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const Wishlist = () => {
    const products = useSelector((state) => state.wishlist.products);
    const { data } = useFetch();

    return (
        <>
            <Stack className="category-banner like" position="relative">
                <Typography sx={{ fontSize: { xs: "3rem", md: "5rem" } }}>
                    Your Wishlist
                </Typography>
            </Stack>
            {products.length === 0 ? (
                <>
                    <Stack
                        sx={{
                            height: { xs: "200px", md: "250px" },
                            paddingBottom: { xs: "50px", md: "0px" },
                        }}
                        pt="50px"
                        alignItems="center">
                        <Stack
                            height="100%"
                            backgroundColor="#F5F5F5"
                            sx={{ width: { xs: "80%", md: "50%" } }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.5rem" },
                                    marginTop: { xs: "20px", md: "30px" },
                                }}
                                textAlign="center">
                                Start a Wishlist
                            </Typography>
                            <Typography
                                sx={{
                                    marginX: {
                                        xs: "10px",
                                        sm: "50px",
                                        md: "100px",
                                    },
                                    marginTop: { xs: "20px", md: "30px" },
                                }}>
                                Keep track of all the items you love. Click the
                                heart icon on each product to save your
                                favorites in a wishlist.
                            </Typography>
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-around"
                                sx={{
                                    margin: {
                                        xs: "20px 20px 0 20px",
                                        md: "30px 70px 0 70px",
                                        lg: "30px 150px 0 150px",
                                    },
                                }}>
                                <Link
                                    to="/men-category"
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}>
                                    <Stack
                                        direction="row"
                                        alignItems="end"
                                        justifyContent="center"
                                        sx={{ cursor: "pointer" }}>
                                        <Typography
                                            className="banner-categories"
                                            textAlign="center"
                                            mt="10px">
                                            Shop Men's
                                        </Typography>
                                        <ArrowOutwardSharpIcon />
                                    </Stack>
                                </Link>
                                <Link
                                    to="/women-category"
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}>
                                    <Stack
                                        direction="row"
                                        alignItems="end"
                                        justifyContent="center"
                                        sx={{ cursor: "pointer" }}>
                                        <Typography
                                            className="banner-categories"
                                            textAlign="center"
                                            mt="10px">
                                            Shop Women's
                                        </Typography>
                                        <ArrowOutwardSharpIcon />
                                    </Stack>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </>
            ) : (
                <Stack
                    direction="row"
                    mt="50px"
                    flexWrap="wrap"
                    gap="10px"
                    justifyContent="center"
                    sx={{ marginBottom: { xs: "50px", md: "0px" } }}>
                    {products
                        .map((product) =>
                            data.filter((i) => i.id.toString() == product.id)
                        )
                        .map((item) =>
                            item.map((product) => (
                                <Card
                                    wishlist={true}
                                    key={product.id}
                                    data={product}
                                    size={"small"}
                                    forSale={product.attributes.forSale}
                                />
                            ))
                        )}
                </Stack>
            )}
        </>
    );
};

export default Wishlist;
