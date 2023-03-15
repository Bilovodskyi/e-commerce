import {
    Stack,
    Typography,
    Box,
    Slider,
    Select,
    MenuItem,
    CircularProgress,
    Pagination,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import SubCategory from "../components/SubCategory";
import BannerMen from "../assets/man-banner.png";
import BannerWomen from "../assets/women-banner.png";

const Category = ({ type }) => {
    const [sliderValue, setSliderValue] = useState([0, 1000]);
    const [sortByValue, setSortByValue] = useState("new");
    const [subCategory, setSubCategory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const { data, loading } = useFetch();

    useEffect(() => {
        setSliderValue([0, 1000]);
        setSortByValue("new");
        setSubCategory([]);
        setCurrentPage(1);
    }, [type]);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };
    const handleSortByChange = (event) => {
        setSortByValue(event.target.value);
    };

    let categoryProducts = null;

    if (sortByValue == "new") {
        categoryProducts = data.filter(
            (product) =>
                product.attributes.categories.data.map(
                    (product) => product.id
                ) == (type === "men" ? 2 : 3) &&
                product.attributes.price >= sliderValue[0] &&
                product.attributes.price <= sliderValue[1]
        );
    }
    if (sortByValue == "from lowest") {
        const fromLowestData = [...data].sort(
            (a, b) => a.attributes.price - b.attributes.price
        );
        categoryProducts = fromLowestData.filter(
            (product) =>
                product.attributes.categories.data.map(
                    (product) => product.id
                ) == (type === "men" ? 2 : 3) &&
                product.attributes.price >= sliderValue[0] &&
                product.attributes.price <= sliderValue[1]
        );
    }
    if (sortByValue == "from highest") {
        const fromHighestData = [...data].sort(
            (a, b) => b.attributes.price - a.attributes.price
        );
        categoryProducts = fromHighestData.filter(
            (product) =>
                product.attributes.categories.data.map(
                    (product) => product.id
                ) == (type === "men" ? 2 : 3) &&
                product.attributes.price >= sliderValue[0] &&
                product.attributes.price <= sliderValue[1]
        );
    }

    const indexOfLastProduct = currentPage * 9;
    const indexOfFirstProduct = indexOfLastProduct - 9;
    const currentProducts = categoryProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 400 });
    };

    return loading ? (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <CircularProgress />
        </Box>
    ) : (
        <>
            <Stack className={`category-banner ${type}`}>
                <Typography fontSize="5rem">
                    {type === "men" ? "For Him" : "For Her"}
                </Typography>
            </Stack>
            {type == "men" ? (
                <Box className="category-banner-mobile" height="500px">
                    <img src={BannerMen} alt="banner men" />
                </Box>
            ) : (
                <Box className="category-banner-mobile" height="500px">
                    <img src={BannerWomen} alt="banner women" />
                </Box>
            )}
            <Stack
                sx={{
                    flexDirection: { md: "row" },
                    paddingX: { xs: "30px", md: "60px" },
                }}
                justifyContent="space-between"
                pb="20px"
                borderBottom="1px solid #ccc">
                <SubCategory
                    subCategory={subCategory}
                    setSubCategory={setSubCategory}
                    type={type}
                    setCurrentPage={setCurrentPage}
                />

                <Stack
                    sx={{
                        width: { md: "35%" },
                        marginTop: { xs: "30px", md: "20px" },
                    }}>
                    <Typography
                        sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                        textAlign="center">
                        FILTER BY PRICE:
                    </Typography>

                    <Box
                        sx={{
                            p: { xs: "30px 20px 20px", md: "40px" },
                            textAlign: "center",
                        }}>
                        <Slider
                            value={sliderValue}
                            onChange={handleSliderChange}
                            valueLabelDisplay="on"
                            step={10}
                            max={1000}
                            sx={{
                                color: "black",
                                height: 0.01,
                                "& .MuiSlider-thumb": {
                                    height: 20,
                                    width: 20,
                                    backgroundColor: "#fff",
                                    border: "1px solid black",
                                },
                                "& .MuiSlider-valueLabel": {
                                    fontSize: "0.7rem",
                                },
                                maxWidth: { sm: "500px", md: "none" },
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                        textAlign="center">
                        SORT BY:
                    </Typography>
                    <Box textAlign="center" p="20px">
                        <Select
                            disableUnderline
                            value={sortByValue}
                            onChange={handleSortByChange}
                            variant="standard"
                            style={{
                                color: "#444",
                                minWidth: "200px",
                                textAlign: "center",
                                fontSize: "0.8rem",
                            }}>
                            <MenuItem
                                value={"new"}
                                style={{ color: "#444", fontSize: "0.8rem" }}>
                                New Arrivals
                            </MenuItem>
                            <MenuItem
                                value={"from lowest"}
                                style={{ color: "#444", fontSize: "0.8rem" }}>
                                Price Low to High
                            </MenuItem>
                            <MenuItem
                                value={"from highest"}
                                style={{ color: "#444", fontSize: "0.8rem" }}>
                                Price High to Low
                            </MenuItem>
                        </Select>
                    </Box>
                </Stack>
            </Stack>
            <Stack
                direction="row"
                mt="50px"
                flexWrap="wrap"
                justifyContent="center"
                sx={{ gap: { xs: "10px", md: "0px" } }}>
                {subCategory.length === 0
                    ? currentProducts.map((product) => (
                          <Card
                              key={product.id}
                              data={product}
                              size={"big"}
                              forSale={product.attributes.forSale}
                          />
                      ))
                    : categoryProducts.map((product) =>
                          product.attributes.sub_categories.data.map(
                              (i) =>
                                  subCategory.includes(
                                      i.attributes.title.toLowerCase()
                                  ) && (
                                      <Card
                                          key={product.id}
                                          data={product}
                                          size={"big"}
                                          forSale={product.attributes.forSale}
                                      />
                                  )
                          )
                      )}
            </Stack>
            <Stack mt="50px" alignItems="center">
                {categoryProducts.length > 9 && subCategory.length === 0 && (
                    <Pagination
                        color="primary"
                        shape="rounded"
                        count={Math.ceil(categoryProducts.length / 9)}
                        page={currentPage}
                        onChange={paginate}
                    />
                )}
            </Stack>
        </>
    );
};

export default Category;
