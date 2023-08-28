import { configureStore } from "@reduxjs/toolkit";

import foodDataSlice from "./FoodData/slice.ts";
import navSlice from "./Navigation/slice.ts";
import sortSlice from "./Sort/slice.ts";
import basketSlice from "./Basket/slice.ts";
import searchSlice from "./Search/slice.ts";

export const store = configureStore({
    reducer: {
        foodDataSlice: foodDataSlice,
        navSlice: navSlice,
        sortSlice: sortSlice,
        searchSlice: searchSlice,
        cartSlice: basketSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
