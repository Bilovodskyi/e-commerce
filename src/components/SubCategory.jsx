import {
    Stack,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Typography,
} from "@mui/material";
import React from "react";
import useFetch from "../hooks/useFetch";
import { theme } from "../utils/theme";

const SubCategory = ({ subCategory, setSubCategory, type, setCurrentPage }) => {
    const { data, categories } = useFetch();

    // categories.map((category) => {
    //     if (
    //         category.attributes.categories.data
    //             .map((cat) => cat.attributes.title)
    //             .includes(type) &&
    //         category.attributes.sub_category_title.data.attributes.title ==
    //             "Clothing"
    //     ) {
    //         console.log(category);
    //     }
    // });

    const clickedSubCategory = (value) => {
        setCurrentPage(1);
        if (subCategory.includes(value)) {
            setSubCategory((prevSubCategory) =>
                prevSubCategory.filter((i) => i !== value)
            );
        } else {
            setSubCategory((prevVal) => [...prevVal, value]);
        }
    };

    return (
        <Stack
            direction="row"
            sx={{
                width: { md: "65%" },
                justifyContent: { xs: "space-around", md: "space-between" },
                marginTop: { md: "40px" },
            }}>
            <FormGroup
                sx={{
                    "& .MuiSvgIcon-root": { color: "#000" },
                    flex: { md: "1" },
                    // flex: "1",
                }}>
                <Typography
                    fontSize="1rem"
                    color="#000"
                    mb="10px"
                    fontWeight="600">
                    Clothing
                </Typography>

                {categories.map(
                    (category) =>
                        category.attributes.categories.data
                            .map((cat) => cat.attributes.title)
                            .includes(type) &&
                        category.attributes.sub_category_title.data.attributes
                            .title == "Clothing" && (
                            <FormControlLabel
                                key={category.id}
                                sx={{
                                    fontSize: theme.typography.fontSize,
                                    textTransform: "capitalize",
                                }}
                                control={
                                    <Checkbox
                                        onClick={() =>
                                            clickedSubCategory(
                                                category.attributes.title.toLowerCase()
                                            )
                                        }
                                    />
                                }
                                label={category.attributes.title}
                            />
                        )
                )}
            </FormGroup>
            <Stack
                sx={{
                    flexDirection: { md: "row" },
                    flex: { md: "2" },
                    gap: { xs: "20px", md: "0" },
                }}>
                <FormGroup
                    sx={{
                        "& .MuiSvgIcon-root": { color: "#000" },
                        flex: "1",
                    }}>
                    <Typography
                        fontSize="1rem"
                        color="#000"
                        mb="10px"
                        fontWeight="600">
                        Shoes
                    </Typography>
                    {categories.map(
                        (category) =>
                            category.attributes.categories.data
                                .map((cat) => cat.attributes.title)
                                .includes(type) &&
                            category.attributes.sub_category_title.data
                                .attributes.title == "Shoes" && (
                                <FormControlLabel
                                    key={category.id}
                                    sx={{
                                        fontSize: theme.typography.fontSize,
                                        textTransform: "capitalize",
                                    }}
                                    control={
                                        <Checkbox
                                            onClick={() =>
                                                clickedSubCategory(
                                                    category.attributes.title.toLowerCase()
                                                )
                                            }
                                        />
                                    }
                                    label={category.attributes.title}
                                />
                            )
                    )}
                </FormGroup>
                <FormGroup
                    sx={{
                        "& .MuiSvgIcon-root": { color: "#000" },
                        flex: "1",
                    }}>
                    <Typography
                        fontSize="1rem"
                        color="#000"
                        mb="10px"
                        fontWeight="600">
                        Accessories
                    </Typography>
                    {categories.map(
                        (category) =>
                            category.attributes.categories.data
                                .map((cat) => cat.attributes.title)
                                .includes(type) &&
                            category.attributes.sub_category_title.data
                                .attributes.title == "Accessories" && (
                                <FormControlLabel
                                    key={category.id}
                                    sx={{
                                        fontSize: theme.typography.fontSize,
                                        textTransform: "capitalize",
                                    }}
                                    control={
                                        <Checkbox
                                            onClick={() =>
                                                clickedSubCategory(
                                                    category.attributes.title.toLowerCase()
                                                )
                                            }
                                        />
                                    }
                                    label={category.attributes.title}
                                />
                            )
                    )}
                </FormGroup>
            </Stack>
        </Stack>
    );
};

export default SubCategory;
