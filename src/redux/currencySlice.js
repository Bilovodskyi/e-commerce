import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    region: {
        currency: "CAD",
        country: "Canada",
    },
};

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        changeCurrency: (state, action) => {
            state.region = action.payload;
        },
    },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
