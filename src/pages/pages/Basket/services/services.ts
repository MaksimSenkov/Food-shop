export function countItems(arr: Cart.CartItem[]) {
    return arr.reduce((acc, elem) => (acc += elem.amount), 0);
}

export function countPrice(arr: Cart.CartItem[]) {
    return arr.reduce((acc, elem) => (acc += elem.amount * elem.price), 0);
}
