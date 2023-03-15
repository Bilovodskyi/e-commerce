import React from "react";
import BannerCategories from "../components/BannerCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import MainBanner from "../components/MainBanner";

const Home = () => {
    return (
        <>
            <MainBanner />
            <BannerCategories />
            <FeaturedProducts />
        </>
    );
};

export default Home;
