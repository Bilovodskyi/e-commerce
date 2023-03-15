import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [exchangeRate, setExchangeRate] = useState(null);

    const options = {
        method: "GET",
        url: "https://exchangerate-api.p.rapidapi.com/rapid/latest/CAD",
        headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_RAPID_TOKEN,
            "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
        },
    };

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_API_URL + "/products?populate=*", {
                headers: {
                    Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
                },
            })
            .then((response) => {
                setData(response.data.data);
                setLoading(false);
            })
            .catch((error) => setError(error));
        axios
            .get(import.meta.env.VITE_API_URL + "/sub-categories?populate=*", {
                headers: {
                    Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
                },
            })
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((error) => console.log(error));

        axios
            .request(options)
            .then(function (response) {
                setExchangeRate(response.data.rates);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return { data, categories, error, loading, exchangeRate };
};

export default useFetch;
