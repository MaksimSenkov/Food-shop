import React from "react";
import { Link, useLocation } from "react-router-dom";

import debounce from "lodash.debounce";

import { useDispatch, useSelector } from "react-redux";
import { getCartSlice } from "../../../redux/Basket/selectors";

import styles from "./Header.module.css";
import { countItems, countPrice } from "./services/services";
import { setSearchValue } from "../../../redux/Search/slice";

export default function Header() {
    const dispatch = useDispatch();

    const cart = useSelector(getCartSlice);
    const [localStr, setLocal] = React.useState("");

    const { pathname } = useLocation();

    const handleDebounceSearchValue = React.useCallback(
        debounce((event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setSearchValue({ value: event.target.value }));
        }, 180),
        []
    );

    return (
        <header className={styles.header}>
            <Link to="/">
                <div className={styles.logo}>
                    <img className={styles.logoImg} src="Food-shop/img/logo/Logo.png" alt="" />
                    <div>
                        <h2 className={styles.label}>Foods</h2>
                        <p>mmm...</p>
                    </div>
                </div>
            </Link>

            <div className={styles.search}>
                <img className={styles.searchIcon} src="Food-shop/img/icons/searchIcon.svg" alt="search Icon" />
                <input
                    value={localStr}
                    className={styles.searchQuery}
                    type="text"
                    placeholder="Поиск..."
                    onChange={(e) => {
                        setLocal(e.target.value);
                        handleDebounceSearchValue(e);
                    }}
                />
            </div>

            {pathname !== "/basket" && (
                <Link to="/basket" className={styles.basket}>
                    <div>
                        <span>{countPrice(cart.items)}</span>&nbsp;₽
                    </div>
                    <div className={styles.basketDivider}></div>
                    <div className={styles.basketItems}>
                        <img src="Food-shop/img/icons/cart.svg" alt="cart icon" />
                        <span>{countItems(cart.items)}</span>
                    </div>
                </Link>
            )}
        </header>
    );
}
