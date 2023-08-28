import { ReduxState } from "../@types/types";

export function getFoodItems(state: ReduxState.RootState) {
    return { status: state.foodDataSlice.status, data: state.foodDataSlice.items };
}
