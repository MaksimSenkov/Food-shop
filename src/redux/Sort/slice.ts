import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Sort.Storage.InitialState = {
    sortValues: [
        {
            label: "возрастанию",
            type: "asc",
        },
        {
            label: "убыванию",
            type: "desc",
        },
        {
            label: "цене",
            type: "price",
        },
        {
            label: "алфавиту",
            type: "alph",
        },
    ],
    sortId: 0,
};

export const sortSlice = createSlice({
    name: "sort",
    initialState: initialState,
    reducers: {
        changeSortType: _changeSortType,
    },
});

function _changeSortType(state: any, action: PayloadAction<{ index: number }>) {
    state.sortId = action.payload.index;
}

export const { changeSortType } = sortSlice.actions;

export default sortSlice.reducer;
