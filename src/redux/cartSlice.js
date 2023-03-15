import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        removeProduct: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products = state.products.filter(
                    (item) => item.id !== action.payload
                );
            }
        },
        deleteAll: (state, action) => {
            state.products = [];
        },
    },
});

export const { addProduct, removeProduct, deleteAll } = cartSlice.actions;

export default cartSlice.reducer;
