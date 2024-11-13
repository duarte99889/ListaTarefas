import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./Slice"

const store = configureStore({
    reducer: {
        saldo: balanceReducer,
    },
});

export default store;
