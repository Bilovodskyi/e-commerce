import {
    Box,
    Button,
    Drawer,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import formatCurrency from "../hooks/useFormatCurrency";

const NavbarDrawerCart = ({ open, setOpen, totalItems }) => {
    const products = useSelector((state) => state.cart.products);
    const regionPicked = useSelector((state) => state.currency.region);

    const totalPrice = () => {
        let total = 0;
        products.map(
            (item) =>
                (total +=
                    item.quantity *
                    (item.forSale.includes(true)
                        ? item.price - Math.floor(item.price * 0.15)
                        : item.price))
        );
        return formatCurrency(total, regionPicked.currency);
    };

    return (
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <Stack
                direction="row"
                justifyContent="space-between"
                borderBottom="1px solid #ccc"
                mb="40px"
                sx={{ width: { xs: "100vw", sm: "auto" } }}>
                <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        p: "20px 40px",
                        fontSize: { xs: "1rem", sm: "1.3rem" },
                        textTransform: "uppercase",
                        fontWeight: "600",
                    }}>
                    Your Shopping bag
                    <span
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: "400",
                            marginLeft: "5px",
                        }}>
                        ({totalItems()})
                    </span>
                </Typography>
                <Box
                    p="20px"
                    alignItems="center"
                    justifyContent="center"
                    borderLeft="1px solid #ccc"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setOpen(false)}>
                    <CloseIcon sx={{ fontSize: "2rem" }} />
                </Box>
            </Stack>
            {products.length === 0 ? (
                <Stack direction="row" m="0 40px 20px 40px" position="relative">
                    <Skeleton
                        variant="rectangular"
                        width="120px"
                        height="120px"
                    />
                    <Stack ml="15px" gap="5px" justifyContent="center">
                        <Skeleton variant="text" width="150px" />
                        <Skeleton variant="text" width="70px" />
                        <Skeleton
                            variant="rectangular"
                            width="60px"
                            height="20px"
                        />
                    </Stack>
                    <Skeleton
                        variant="rectangular"
                        width="10px"
                        height="15px"
                        sx={{ position: "absolute", right: "20px", mt: "5px" }}
                    />
                </Stack>
            ) : (
                products.map((product) => (
                    <CartProduct key={product.id} product={product} />
                ))
            )}

            <Stack
                direction="row"
                borderTop="1px solid #ccc"
                justifyContent="space-between"
                m="10px 40px 0 40px"
                pt="10px">
                <Typography
                    sx={{
                        fontSize: "1.1rem",
                        textTransform: "uppercase",
                        fontWeight: "600",
                    }}>
                    Total:
                </Typography>
                <Typography fontSize="1.25rem">{totalPrice()}</Typography>
            </Stack>
            <Stack m="30px 40px 0 40px">
                {products.length === 0 ? (
                    <Button
                        disabled
                        variant="contained"
                        sx={{
                            backgroundColor: "primary",
                            borderRadius: "0",
                            mb: "10px",
                            textTransform: "none",
                            height: "45px",
                            "&:hover": { backgroundColor: "primary" },
                        }}>
                        Go to Payment Methods
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "primary",
                            borderRadius: "0",
                            mb: "10px",
                            textTransform: "none",
                            height: "45px",
                            "&:hover": { backgroundColor: "primary" },
                        }}>
                        Go to Payment Methods
                    </Button>
                )}
            </Stack>
        </Drawer>
    );
};

export default NavbarDrawerCart;
