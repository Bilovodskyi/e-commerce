import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useDispatch, useSelector } from "react-redux";
import { dislikeProduct } from "../redux/wishlistSlice";
import ForSalePrice from "./ForSalePrice";
import formatCurrency from "../hooks/useFormatCurrency";

const Card = ({ data, size, wishlist, forSale }) => {
    const dispatch = useDispatch();
    const regionPicked = useSelector((state) => state.currency.region);

    const handleRemove = () => {
        dispatch(dislikeProduct({ id: data.id.toString() }));
    };

    return (
        <Stack position="relative">
            <Link
                to={`/e-commerce/product/${data.id}`}
                style={{
                    textDecoration: "none",
                    color: "#000",
                }}>
                <Stack className={`card ${size}`}>
                    <img
                        src={
                            import.meta.env.VITE_UPLOAD_URL +
                            data.attributes.img2.data.attributes.url
                        }
                        alt={data.attributes.title}
                    />
                    <Box width="100%">
                        <Typography
                            sx={{ fontSize: { xs: "0.55rem", md: "0.75rem" } }}
                            color="#888"
                            ml="15px">
                            E-Commerce
                        </Typography>
                        <Typography
                            sx={{ fontSize: { xs: "0.65rem", md: "1rem" } }}
                            ml="15px">
                            {data.attributes.title}
                        </Typography>
                        {forSale ? (
                            <Typography
                                fontSize="1rem"
                                ml="15px"
                                marginY="5px"
                                fontWeight="500">
                                <ForSalePrice
                                    price={data.attributes.price}
                                    region={regionPicked.currency}
                                />
                            </Typography>
                        ) : (
                            <Typography
                                sx={{ fontSize: { xs: "0.65rem", md: "1rem" } }}
                                ml="15px"
                                fontWeight="500">
                                {formatCurrency(
                                    data.attributes.price,
                                    regionPicked.currency
                                )}
                            </Typography>
                        )}
                    </Box>
                </Stack>
            </Link>
            {wishlist && (
                <Stack
                    width="50px"
                    height="50px"
                    position="absolute"
                    justifyContent="center"
                    alignItems="center"
                    top="0"
                    right="0"
                    onClick={handleRemove}
                    sx={{ cursor: "pointer" }}>
                    <HeartBrokenIcon
                        sx={{
                            top: "15px",
                            right: "15px",
                            fontSize: "2rem",
                            color: "white",
                            "&:hover": {
                                color: "#ad0505",
                            },
                        }}
                    />
                </Stack>
            )}
        </Stack>
    );
};

export default Card;
