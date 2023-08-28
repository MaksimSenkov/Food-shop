import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        setSearchValue: _setSearchValue,
    },
});

function _setSearchValue(state: any, action: PayloadAction<{ value: string }>) {
    state.searchValue = action.payload.value;
}

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
