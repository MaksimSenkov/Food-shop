import { ReduxState } from "../@types/types";

export function getSortSlice(state: ReduxState.RootState) {
    return state.sortSlice;
}
