import {configureStore} from "@reduxjs/toolkit";
import tableReducer from "./TableSlice";
import themeSlice from "./ThemeSlice";
import scoreSlice from "./ScoreSlice";

const reducer = {
    table: tableReducer,
    theme: themeSlice,
    score: scoreSlice
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
