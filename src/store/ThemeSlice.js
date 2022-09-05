import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    primeColor: "white",
    secColor: "black"
}

const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        doToggleTheme(state, {payload: {primeColor, secColor}}) {
            state.primeColor = primeColor;
            state.secColor = secColor;
        }
    }
})

export const {doToggleTheme} = ThemeSlice.actions
export default ThemeSlice.reducer;
