import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Navigation.Storage.InitialState = {
    navItems: ["Все", "Бургеры", "Снэки", "Сладкое", "Горячие напитки", "Холодные напитки"],
    navItemIndex: 0,
};

export const navSlice = createSlice({
    name: "navigation",
    initialState: initialState,

    reducers: {
        changeCategory: setCategory,
    },
});

function setCategory(state: any, action: PayloadAction<{ index: number }>) {
    state.navItemIndex = action.payload.index;
}

export const { changeCategory } = navSlice.actions;

export default navSlice.reducer;
