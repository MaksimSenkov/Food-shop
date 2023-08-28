import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import BasketEmpty from "./components/BasketEmpty/BasketEmpty";
import Card from "./components/BasketListItem/Card";

import { getCartItems } from "../../../redux/Basket/selectors";

import { countItems, countPrice } from "./services/services";

import styles from "./Main.module.css";

export default function Basket() {
    const items = useSelector(getCartItems);

    const navigate = useNavigate();

    if (items.length === 0) {
        return (
            <main className={styles.main}>
                <BasketEmpty />
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.headingWrapper}>
                <img src="FoodShop/img/icons/cartGray.svg" alt="Cart Logo" />
                <h2 className={styles.heading}>Корзина</h2>
            </div>

            <ul className={styles.list}>
                {items.map((elem) => {
                    return (
                        <li key={elem.id} className={styles.listItem}>
                            <Card id={elem.id} item={elem.item} amount={elem.amount} price={elem.price} />
                        </li>
                    );
                })}
            </ul>

            <div className={styles.totalOutput}>
                <p>
                    Всего: <output>{countItems(items)} шт.</output>
                </p>
                <p>
                    Сумма заказа:
                    <output className={styles.totalPrice}>
                        {countPrice(items)}
                        {"\u00A0"}₽
                    </output>
                </p>
            </div>

            <div className={styles.controls}>
                <button className={styles.goBackButton} onClick={() => navigate(-1)}>
                    <span>&lt;</span>Вернуться назад
                </button>
                <button className={styles.completeOrderButton}>Оформить заказ</button>
            </div>
        </main>
    );
}
