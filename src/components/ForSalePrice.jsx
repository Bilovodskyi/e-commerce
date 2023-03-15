import { Box } from "@mui/material";
import React from "react";
import formatCurrency from "../hooks/useFormatCurrency";

const ForSalePrice = ({ price, smallSize, region }) => {
    return (
        <Box display="flex" alignItems="center">
            <Box
                className="for-sale-price"
                style={{
                    textDecoration: "line-through",
                    fontSize: smallSize ? "0.4rem" : "0.85rem",
                }}>
                {formatCurrency(price, region)}
            </Box>
            <Box
                className="for-sale-price"
                style={{
                    fontSize: smallSize && "0.75rem",
                    marginLeft: "10px",
                    color: "#ad0505",
                }}>
                Deal 15%
            </Box>
            <Box
                className="for-sale-price"
                style={{
                    fontSize: smallSize ? "0.75rem" : "1.1rem",
                    marginLeft: "10px",
                }}>
                {formatCurrency(price - Math.trunc(price * 0.15), region)}
            </Box>
        </Box>
    );
};

export default ForSalePrice;
