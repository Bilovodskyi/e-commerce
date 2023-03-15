import { Button } from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

import { useSnackbar } from "notistack";

const AddToCartButton = ({ id, currentProductData }) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    return (
        <Button
            variant="contained"
            onClick={() => {
                enqueueSnackbar("Added to the Cart", { variant: "info" });
                dispatch(
                    addProduct({
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
                        forSale: currentProductData.map(
                            (product) => product.attributes.forSale
                        ),
                        quantity: 1,
                    })
                );
            }}
            sx={{
                backgroundColor: "primary",
                borderRadius: "0",
                mb: "10px",
                textTransform: "none",
                height: "45px",
                "&:hover": { backgroundColor: "primary" },
            }}>
            Add to bag
        </Button>
    );
};

export default AddToCartButton;
