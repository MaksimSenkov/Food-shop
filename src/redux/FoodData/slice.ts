import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MOCKAPI_LINK } from "../../config";

const initialState: Server.InitialState = {
    items: [],
    status: "pending",
};

const foodDataSlice = createSlice({
    name: "foodDataSlice",
    initialState: initialState,
    reducers: {
        setFoodItems: _setItems,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoodData.pending, (state) => {
            state.status = "pending";
            state.items = [];
        });

        builder.addCase(fetchFoodData.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.items = [...action.payload];
        });

        builder.addCase(fetchFoodData.rejected, (state) => {
            state.status = "rejected";
            state.items = [];
        });
    },
});

function _setItems(state: any, action: PayloadAction<{ items: Server.FoodData[] }>) {
    state.items = action.payload.items;
}

export const fetchFoodData = createAsyncThunk("food/fetchFood", async (category: number, thunkApi) => {
    let url = new URL(MOCKAPI_LINK);
    url.searchParams.append("category", category.toString());

    let rawData = await fetch(url);
    let data = (await rawData.json()) as Server.FoodData[];

    return data;
});

export const { setFoodItems } = foodDataSlice.actions;

export default foodDataSlice.reducer;
