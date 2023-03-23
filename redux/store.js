import { configureStore, combineReducers } from "@reduxjs/toolkit";

import navReducer from "./reducers/nav.js";

const rootReducer = combineReducers({
    nav: navReducer,
    // add more slices here if needed
});

export const reduxStore = configureStore({
    reducer: rootReducer,
});
