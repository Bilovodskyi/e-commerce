import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/cartSlice";
import { Stack, Typography, Box } from "@mui/material";
import ForSalePrice from "./ForSalePrice";
import formatCurrency from "../hooks/useFormatCurrency";

const CartProduct = ({ product }) => {
    const dispatch = useDispatch();
    const regionPicked = useSelector((state) => state.currency.region);

    return (
        <Stack key={product.id} direction="row" m="0 40px">
            <Stack
                className="cart-product"
                sx={{ width: "120px", height: "120px", mb: "20px" }}>
                <img src={product.img} alt="test" />
            </Stack>
            <Stack justifyContent="center" ml="15px" mb="20px" gap="5px">
                <Typography fontSize="0.75rem" fontWeight="500">
                    {product.title}
                </Typography>
                <Stack>
                    {product.forSale.includes(true) ? (
                        <Box
                            display="flex"
                            flexDirection="row"
                            gap="5px"
                            alignItems="center">
                            <Typography fontSize="0.75rem">
                                {`${product.quantity} x `}
                            </Typography>
                            <Typography>
                                <ForSalePrice
                                    price={product.price}
                                    smallSize={true}
                                    region={regionPicked.currency}
                                />
                            </Typography>
                        </Box>
                    ) : (
                        <Typography fontSize="0.75rem">{`${
                            product.quantity
                        } x ${formatCurrency(
                            product.price,
                            regionPicked.currency
                        )}`}</Typography>
                    )}
                    <Stack direction="row" mt="10px">
                        <Typography
                            sx={{
                                cursor: "pointer",
                                width: "20px",
                                height: "20px",
                                border: "0.5px solid black",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                "&:active": {
                                    backgroundColor: "#e6e6e6",
                                },
                            }}
                            onClick={() =>
                                product.quantity > 1
                                    ? dispatch(
                                          removeProduct({
                                              id: product.id,
                                              quantity: -1,
                                          })
                                      )
                                    : dispatch(removeProduct(product.id))
                            }>
                            -
                        </Typography>
                        <Typography
                            sx={{
                                width: "20px",
                                height: "20px",
                                borderTop: "0.5px solid black",
                                borderBottom: "0.5px solid black",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.75rem",
                            }}>
                            {product.quantity}
                        </Typography>
                        <Typography
                            sx={{
                                cursor: "pointer",
                                width: "20px",
                                height: "20px",
                                border: "0.5px solid black",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                "&:active": {
                                    backgroundColor: "#e6e6e6",
                                },
                            }}
                            onClick={() =>
                                dispatch(
                                    addProduct({
                                        id: product.id,
                                        quantity: +1,
                                    })
                                )
                            }>
                            +
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <DeleteForeverOutlinedIcon
                onClick={() => dispatch(removeProduct(product.id))}
                sx={{
                    position: "absolute",
                    right: "50px",
                    mt: "5px",
                    cursor: "pointer",
                    fontSize: { xs: "1.5rem", md: "1rem" },
                }}
            />
        </Stack>
    );
};

export default CartProduct;
