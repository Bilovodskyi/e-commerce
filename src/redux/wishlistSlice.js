import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        likeProduct: (state, action) => {
            if (
                state.products.find(
                    (product) => product.id !== action.payload.id
                ) ||
                state.products.length === 0
            ) {
                state.products.push(action.payload);
            }
        },
        dislikeProduct: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload.id
            );
        },
        deleteAll: (state, action) => {
            state.products = [];
        },
    },
});

export const { likeProduct, dislikeProduct, deleteAll } = wishlistSlice.actions;

export default wishlistSlice.reducer;
