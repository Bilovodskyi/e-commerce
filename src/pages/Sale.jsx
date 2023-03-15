import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Card from "../components/Card";

import BannerRed from "../assets/red-banner.png";
import useFetch from "../hooks/useFetch";

const Sale = () => {
    const [pickedMan, setPickedMan] = useState("");
    const [pickedWoman, setPickedWoman] = useState("");

    const { data } = useFetch();

    const categoryProducts = data.filter(
        (product) =>
            product.attributes.categories.data.map((product) => product.id) ==
            (pickedMan ? 2 : 3)
    );

    const handlePickedMan = () => {
        setPickedWoman("");
        pickedMan === "" ? setPickedMan("picked") : setPickedMan("");
    };

    const handlePickedWoman = () => {
        setPickedMan("");
        pickedWoman === "" ? setPickedWoman("picked") : setPickedWoman("");
    };
    return (
        <>
            <Stack className="category-banner sale" position="relative">
                <img
                    src={BannerRed}
                    alt="banner red"
                    style={{ height: "400px", overflow: "hidden" }}
                />
                <Typography
                    fontSize="5rem"
                    position="absolute"
                    textTransform="uppercase"
                    mr="20px"
                    sx={{ right: 0, bottom: 0 }}>
                    Sale
                </Typography>
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                width="100%"
                height="120px"
                borderBottom="1px solid #ccc"
                paddingY="20px">
                <Stack
                    className={`button-sale ${pickedMan}`}
                    onClick={handlePickedMan}
                    sx={{
                        borderRadius: "0",
                    }}>
                    <Typography
                        fontSize="1.5rem"
                        className={`banner-categories  ${pickedMan}`}>
                        Man
                    </Typography>
                </Stack>
                <Stack
                    className={`button-sale ${pickedWoman}`}
                    onClick={handlePickedWoman}
                    sx={{
                        borderRadius: "0",
                    }}>
                    <Typography
                        fontSize="1.5rem"
                        className={`banner-categories  ${pickedWoman}`}>
                        Woman
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                direction="row"
                mt="50px"
                flexWrap="wrap"
                justifyContent="center"
                sx={{
                    gap: { xs: "10px", md: "0px" },
                    marginBottom: { xs: "25px", md: "0px" },
                }}>
                {pickedMan === "" && pickedWoman === ""
                    ? data.map(
                          (product) =>
                              product.attributes.forSale && (
                                  <Card
                                      key={product.id}
                                      data={product}
                                      forSale={true}
                                      size={"big"}
                                  />
                              )
                      )
                    : categoryProducts.map(
                          (product) =>
                              product.attributes.forSale && (
                                  <Card
                                      key={product.id}
                                      data={product}
                                      forSale={true}
                                      size={"big"}
                                  />
                              )
                      )}
            </Stack>
        </>
    );
};

export default Sale;
