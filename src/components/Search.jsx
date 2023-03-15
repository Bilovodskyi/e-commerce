import { Typography, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Search = ({ search, handleClose }) => {
    const { data } = useFetch();

    // console.log(data.map((product) => product.attributes.title));

    // console.log(
    //     data.map((product) =>
    //         product.attributes.categories.data.map(
    //             (category) => category.attributes.title == "men"
    //         )
    //     )
    // );
    return (
        <Stack
            sx={{
                overflow: "scroll",
                mt: "30px",
                width: { xs: "90vw", md: "700px" },
            }}>
            {data
                .filter((product) =>
                    product.attributes.title
                        .toLowerCase()
                        .includes(search?.toLowerCase())
                )
                .map((item) => (
                    <Link
                        to={`/e-commerce/product/${item.id}`}
                        key={item.id}
                        onClick={handleClose}
                        style={{
                            textDecoration: "none",
                            color: "#000",
                        }}>
                        <Stack
                            direction="row"
                            mt="20px"
                            alignItems="center"
                            sx={{
                                cursor: "pointer",
                            }}>
                            <Stack
                                className="cart-product"
                                sx={{
                                    width: "70px",
                                    height: "70px",
                                    mr: "10px",
                                }}>
                                <img
                                    src={
                                        import.meta.env.VITE_UPLOAD_URL +
                                        item.attributes.img1.data.attributes.url
                                    }
                                    alt="test"
                                />
                            </Stack>
                            <Stack>
                                <Typography textTransform="uppercase">
                                    {item.attributes.title}
                                </Typography>
                                <Typography
                                    fontSize="0.75rem"
                                    textTransform="capitalize">
                                    Found in{" "}
                                    {item.attributes.categories.data.map(
                                        (category) => category.attributes.title
                                    )}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Link>
                ))}
        </Stack>
    );
};

export default Search;
