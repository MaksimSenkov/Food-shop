import { ReduxState } from "../@types/types";

export function getSearchValue(state: ReduxState.RootState) {
    return state.searchSlice.searchValue;
}
