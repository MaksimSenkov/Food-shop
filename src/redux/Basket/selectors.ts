import { ReduxState } from "../@types/types";

export function getCartItems(state: ReduxState.RootState) {
    return state.cartSlice.items;
}

export function getCartSlice(state: ReduxState.RootState) {
    return state.cartSlice;
}

export function findItemInCart(label: string, size: string) {
    return (state: ReduxState.RootState) => {
        return state.cartSlice.items.find((elem: Cart.CartItem) => {
            return (
                elem.item.label.toLowerCase() === label.toLowerCase() &&
                elem.item.size.toLowerCase() === size.toLowerCase()
            );
        });
    };
}
