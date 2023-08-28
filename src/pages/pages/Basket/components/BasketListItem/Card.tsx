import { useDispatch } from "react-redux";

import { removeItem, incAmount, decAmount } from "../../../../../redux/Basket/slice";

import styles from "./Card.module.css";

export default function Card({ id, amount, price, item }: Cart.CartItemProps) {
    const dispatch = useDispatch();

    return (
        <article className={styles.article}>
            <div className={styles.item}>
                <img className={styles.img} src={item.img} alt="food image" />

                <div className={styles.headingWrapper}>
                    <h3 className={styles.heading}>{item.label}</h3>
                    <p className={styles.description}>{`Размер: ${item.size}`}</p>
                </div>
            </div>

            <div className={styles.amountWrapper}>
                <button
                    id="incAmount"
                    className={styles.changeAmoutButton}
                    onClick={() => dispatch(decAmount({ id: id }))}
                >
                    &minus;
                </button>
                <output htmlFor="incAmount decAmount" className={styles.amountOutput}>
                    {amount}
                </output>
                <button
                    id="decAmount"
                    className={styles.changeAmoutButton}
                    onClick={() => dispatch(incAmount({ id: id }))}
                >
                    +
                </button>
            </div>

            <output className={styles.price}>{amount * price}&nbsp;₽</output>

            <button className={styles.removeButton} onClick={() => dispatch(removeItem({ id: id }))}>
                &times;
            </button>
        </article>
    );
}
