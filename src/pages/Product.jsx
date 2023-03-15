import { Button, Stack, Typography, Box } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import AddToCartButton from "../components/AddToCartButton";
import ForSalePrice from "../components/ForSalePrice";
import { useSnackbar } from "notistack";
import formatCurrency from "../hooks/useFormatCurrency";

import { useDispatch, useSelector } from "react-redux";
import { dislikeProduct, likeProduct } from "../redux/wishlistSlice";

const Product = () => {
    const id = useParams().id;
    const [showImage, setShowImage] = useState(false);

    const products = useSelector((state) => state.wishlist.products);
    const regionPicked = useSelector((state) => state.currency.region);

    const { data } = useFetch();
    const currentProductData = data.filter((product) => product.id == id);
    const handleCurrency = formatCurrency(
        currentProductData.map((product) => product.attributes.price),
        regionPicked.currency
    );

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        if (products.find((product) => product.id === id)) {
            enqueueSnackbar("Removed from the wishlist.", {
                autoHideDuration: 2000,
                variant: "error",
            });
            dispatch(
                dislikeProduct({
                    id: id,
                })
            );
        } else {
            enqueueSnackbar("Added to the wishlist.", {
                autoHideDuration: 2000,
                variant: "success",
            });
            dispatch(
                likeProduct({
                    id: id,
                    title: currentProductData.map(
                        (product) => product.attributes.title
                    ),
                    img:
                        import.meta.env.VITE_UPLOAD_URL +
                        currentProductData.map(
                            (product) =>
                                product.attributes.img1.data.attributes.url
                        ),
                    price: currentProductData.map(
                        (product) => product.attributes.price
                    ),
                })
            );
        }
    };

    return (
        <>
            <Stack
                sx={{
                    flexDirection: { xs: "column", md: "row" },
                    marginTop: { xs: "50px", md: "80px" },
                    marginBottom: { md: "50px" },
                }}>
                <Stack
                    sx={{
                        display: { xs: "none", md: "block" },
                        width: "11%",
                        flexDirection: "row",
                        // width: { xs: "20%", md: "11%" },
                        // gap: { xs: "15px", md: "0px" },
                        // marginLeft: { xs: "15px", md: "0px" },
                        // flexDirection: { xs: "row", md: "column" },
                    }}>
                    <img
                        src={
                            import.meta.env.VITE_UPLOAD_URL +
                            currentProductData.map(
                                (product) =>
                                    product?.attributes?.img1?.data?.attributes
                                        ?.url
                            )
                        }
                        alt={currentProductData.map(
                            (product) => product.attributes.title
                        )}
                        style={{
                            cursor: "pointer",
                            width: "100%",
                        }}
                        onClick={() => setShowImage(false)}
                    />
                    <img
                        src={
                            import.meta.env.VITE_UPLOAD_URL +
                            currentProductData.map(
                                (product) =>
                                    product?.attributes?.img2?.data?.attributes
                                        ?.url
                            )
                        }
                        alt={currentProductData.map(
                            (product) => product.attributes.title
                        )}
                        style={{
                            cursor: "pointer",
                            width: "100%",
                        }}
                        onClick={() => setShowImage(true)}
                    />
                </Stack>
                <Stack
                    sx={{ width: { md: "39%" }, position: "relative" }}
                    className="product">
                    <Stack
                        sx={{
                            display: { xs: "block", md: "none" },
                            position: "absolute",
                            top: "0",
                            bottom: "0",
                            left: "0",
                            right: "0",
                        }}
                        onClick={() => setShowImage((prev) => !prev)}></Stack>
                    <img
                        src={
                            showImage
                                ? import.meta.env.VITE_UPLOAD_URL +
                                  currentProductData.map(
                                      (product) =>
                                          product?.attributes?.img2?.data
                                              ?.attributes?.url
                                  )
                                : import.meta.env.VITE_UPLOAD_URL +
                                  currentProductData.map(
                                      (product) =>
                                          product?.attributes?.img1?.data
                                              ?.attributes?.url
                                  )
                        }
                        alt={currentProductData.map(
                            (product) => product.attributes.title
                        )}
                    />
                </Stack>

                <Stack
                    sx={{
                        width: { md: "50%" },
                        margin: { xs: "20px 0", md: "0" },
                    }}
                    justifyContent="center"
                    alignItems="center">
                    <Stack
                        sx={{
                            width: { xs: "320px", md: "350px" },
                            height: { md: "500px" },
                        }}
                        justifyContent="center">
                        <Typography
                            fontSize="0.75rem"
                            mb="10px"
                            position="relative">
                            {currentProductData.map(
                                (product) => product.attributes.serialNum
                            )}
                            {products.find((product) => product.id == id) ? (
                                <FavoriteIcon
                                    onClick={handleClick}
                                    style={{
                                        position: "absolute",
                                        width: "20px",
                                        height: "20px",
                                        right: "0",
                                        top: "0",
                                        cursor: "pointer",
                                    }}
                                />
                            ) : (
                                <FavoriteBorderIcon
                                    onClick={handleClick}
                                    style={{
                                        position: "absolute",
                                        width: "20px",
                                        height: "20px",
                                        right: "0",
                                        top: "0",
                                        cursor: "pointer",
                                    }}
                                />
                            )}
                        </Typography>

                        <Typography
                            fontSize="1.2rem"
                            mb="10px"
                            sx={{
                                textTransform: "uppercase",
                            }}>
                            {currentProductData.map(
                                (product) => product.attributes.title
                            )}
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            borderTop="1px solid #ccc"
                            borderBottom="1px solid #ccc"
                            paddingY="10px">
                            <Typography fontSize="0.8rem">Sizes:</Typography>
                            <Typography fontSize="0.8rem">
                                {currentProductData.map(
                                    (product) => product.attributes.sizes
                                )}
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            borderBottom="1px solid #ccc"
                            paddingY="10px">
                            <Typography fontSize="0.8rem">
                                Availability:
                            </Typography>
                            <Stack direction="row" alignItems="center">
                                <LocalShippingIcon
                                    style={{ color: "#428221", height: "17px" }}
                                />
                                <Typography
                                    fontSize="0.65rem"
                                    ml="5px"
                                    color="#428221">
                                    Available for delivery
                                </Typography>
                            </Stack>
                        </Stack>
                        {currentProductData.map((product) =>
                            product.attributes.forSale ? (
                                <Typography
                                    key={product.id}
                                    fontSize="1.2rem"
                                    paddingY="20px"
                                    fontWeight="500">
                                    <ForSalePrice
                                        price={product.attributes.price}
                                        region={regionPicked.currency}
                                    />
                                </Typography>
                            ) : (
                                <Typography
                                    key={product.id}
                                    fontSize="1.2rem"
                                    paddingY="20px"
                                    fontWeight="500">
                                    {handleCurrency}
                                </Typography>
                            )
                        )}
                        <AddToCartButton
                            id={id}
                            currentProductData={currentProductData}
                        />
                        <Button
                            variant="outlined"
                            sx={{
                                color: "primary",
                                borderRadius: "0",
                                textTransform: "none",
                                height: "45px",
                                "&:hover": { backgroundColor: "white" },
                            }}
                            startIcon={<LocationOnOutlinedIcon />}>
                            Check Availability in Stores
                        </Button>
                        <Typography
                            fontSize="0.75rem"
                            paddingY="20px"
                            fontWeight="300">
                            Complimentary and duty-free Green Delivery and
                            Collect-in-Store, taxes still apply.
                        </Typography>

                        <Link to="product-info" smooth={true}>
                            <Button
                                style={{
                                    marginTop: "25px",
                                    justifyContent: "flex-start",
                                    width: "fit-content",
                                    fontWeight: "300",
                                }}
                                sx={{ display: { xs: "none", md: "flex" } }}
                                startIcon={<MoreHorizSharpIcon />}>
                                Product details
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
            <ProductDetails data={currentProductData} />
        </>
    );
};

export default Product;
