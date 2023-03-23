import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openMenu: false,
    scrolling: false,
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        CLOSE_MENU: (state) => {
            state.openMenu = false;
        },
        TOGGLE_MENU: (state) => {
            state.openMenu = !state.openMenu;
        },
        TOGGLE_SCROLLING: (state, action) => {
            state.scrolling = action.payload;
        },
    },
});

export const { TOGGLE_MENU, TOGGLE_SCROLLING, CLOSE_MENU } = navSlice.actions;
export default navSlice.reducer;
