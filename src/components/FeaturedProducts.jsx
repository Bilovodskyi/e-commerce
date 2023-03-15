import React from "react";
import Card from "./Card";
import { Stack, Typography, Box } from "@mui/material";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = () => {
    const { data } = useFetch();

    return (
        <Box sx={{ marginTop: { xs: "25px", md: "75px" } }}>
            <Stack
                sx={{
                    flexDirection: { md: "row" },
                    alignItems: { xs: "flex-start", md: "flex-end" },
                }}>
                <Typography
                    fontSize="2rem"
                    ml="20px"
                    mb="20px"
                    color="secondary">
                    Featured
                </Typography>
                <Typography color="#888" ml="20px" mb="20px" pb="8px">
                    Our top shopping recommendations{" "}
                    <span style={{ textDecoration: "underline" }}>for you</span>
                </Typography>
            </Stack>
            <Stack direction="row">
                <Typography ml="20px" color="secondary">
                    New Collection
                </Typography>
                <Box
                    ml="5px"
                    height="15px"
                    backgroundColor="green"
                    textAlign="center">
                    <Typography
                        fontSize="0.7rem"
                        color="#fff"
                        sx={{ paddingX: "2px" }}>
                        New
                    </Typography>
                </Box>
            </Stack>
            <Stack
                direction="row"
                m="20px"
                flexWrap="wrap"
                justifyContent="center"
                gap="10px">
                {data.map(
                    (product) =>
                        product.attributes.isNew && (
                            <Card
                                key={product.id}
                                data={product}
                                size={"small"}
                            />
                        )
                )}
            </Stack>
        </Box>
    );
};

export default FeaturedProducts;
