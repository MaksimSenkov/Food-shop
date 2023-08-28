import { ReduxState } from "../@types/types";

export function getNavigationItems(state: ReduxState.RootState) {
    return state.navSlice;
}

export function getNavItemIndex(state: ReduxState.RootState) {
    return state.navSlice.navItemIndex;
}

export function getNavLabel(state: ReduxState.RootState) {
    return state.navSlice.navItems[getNavItemIndex(state)];
}
