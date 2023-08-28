import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Cart.Storage.CartItemState = {
    items: [],
    totalPrice: 0,
};

export const basketSlice = createSlice({
    name: "cart",
    initialState: initialState,

    reducers: {
        removeItem: _removeItem,

        incAmount: _incAmount,
        decAmount: _decAmount,
        addItemToCart: _addItemToCart,
    },
});

export const { removeItem, incAmount, decAmount, addItemToCart } = basketSlice.actions;

export default basketSlice.reducer;

function _removeItem(state: any, action: PayloadAction<{ id: number }>) {
    state.items = state.items.filter((elem: Cart.CartItem) => {
        return elem.id !== action.payload.id;
    });
}

function _incAmount(state: any, action: PayloadAction<{ id: number }>) {
    const target = state.items.find((elem: Cart.CartItem) => {
        return elem.id === action.payload.id;
    });

    target.amount += 1;
}

function _decAmount(state: any, action: PayloadAction<{ id: number }>) {
    const target = state.items.find((elem: Cart.CartItem) => {
        return elem.id === action.payload.id;
    });

    target.amount -= 1;

    if (target.amount === 0) {
        _removeItem(state, action);
    }
}

function _addItemToCart(state: any, action: PayloadAction<Cart.Storage.ItemToCart>) {
    const payload = action.payload;

    const findedElem = state.items.find((elem: Cart.CartItem) => {
        return elem.item.label.toLowerCase() === payload.label.toLowerCase() && elem.item.size === payload.size;
    });

    if (findedElem) {
        findedElem.amount += 1;
    } else {
        state.items.push({
            id: (state.items[state.items.length - 1]?.id ?? 0) + 1,
            item: {
                label: payload.label,
                size: payload.size,

                img: payload.img,
            },
            price: +payload.price,
            amount: 1,
        } as Cart.CartItem);
    }
}
