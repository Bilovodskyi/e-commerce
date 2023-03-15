import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Stack } from "@mui/material";
import Sale from "./pages/Sale";
import Wishlist from "./pages/Wishlist";

const Layout = () => {
    return (
        <Stack>
            <Navbar />
            <Outlet />
            <Footer />
        </Stack>
    );
};

const router = createBrowserRouter([
    {
        path: "/e-commerce/",
        element: <Layout />,
        children: [
            {
                path: "/e-commerce/",
                element: <Home />,
            },

            {
                path: "/e-commerce/men-category",
                element: <Category type={"men"} />,
            },
            {
                path: "/e-commerce/women-category",
                element: <Category type={"women"} />,
            },

            {
                path: "/e-commerce/product/:id",
                element: <Product />,
            },
            {
                path: "/e-commerce/for-sale",
                element: <Sale />,
            },
            {
                path: "/e-commerce/wishlist",
                element: <Wishlist />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
export default App;
