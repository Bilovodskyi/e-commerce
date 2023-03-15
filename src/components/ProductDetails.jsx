import { ListItem, Stack, Typography, List, Box } from "@mui/material";
import React, { useState } from "react";

const ProductDetails = ({ data }) => {
    const [readMore, setReadMore] = useState(false);

    // data.map((product) =>
    //     product.attributes.details.map((ob) => {
    //         for (const key in ob) {
    //             if (key !== "id") {
    //                 console.log(ob[key]);
    //             }
    //         }
    //     })
    // );

    return (
        <Stack
            sx={{ margin: { xs: "0px 20px 30px 20px", md: "0px 150px" } }}
            className="product-info">
            <Typography borderBottom="1px solid #ccc" p="20px" fontWeight="500">
                Product Details
            </Typography>
            {readMore ? (
                <Stack sx={{ transition: "display 1s ease" }}>
                    <Typography sx={{ fontSize: "0.75rem", p: "20px" }}>
                        {`Description: ${data.map(
                            (product) => product.attributes.desc
                        )}`}
                    </Typography>
                    <Stack direction="row">
                        <List
                            sx={{
                                columnCount: "2",
                                ml: "35px",
                                listStyleType: "disc",
                                "& .MuiListItem-root": {
                                    display: "list-item",
                                },
                            }}>
                            {data.map((product) =>
                                product.attributes.details.map((ob) =>
                                    Object.keys(ob).map(
                                        (key, index) =>
                                            key !== "id" && (
                                                <ListItem
                                                    disablePadding
                                                    key={index}
                                                    sx={{
                                                        p: "10px 10px 10px 0px",
                                                    }}>
                                                    {ob[key]}
                                                </ListItem>
                                            )
                                    )
                                )
                            )}
                        </List>
                    </Stack>
                </Stack>
            ) : (
                <Typography
                    sx={{
                        fontSize: "0.75rem",
                        p: "20px",
                    }}>
                    {`Description: ${data.map(
                        (product) => product.attributes.desc
                    )}`}
                </Typography>
            )}
            <Box
                onClick={() => setReadMore(!readMore)}
                sx={{
                    fontSize: "0.85rem",
                    paddingX: "20px",
                    fontWeight: "500",
                    textDecoration: "underline",
                    cursor: "pointer",
                }}>
                {readMore ? "Read less" : "Read more"}
            </Box>
        </Stack>
    );
};

export default ProductDetails;
