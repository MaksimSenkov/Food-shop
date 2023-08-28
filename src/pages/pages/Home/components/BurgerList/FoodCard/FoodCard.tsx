import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addItemToCart } from "../../../../../../redux/Basket/slice";
import { findItemInCart } from "../../../../../../redux/Basket/selectors";

import styles from "./FoodCard.module.css";

export default function FoodCard({ id, label, imageUrl, sizes, price }: FoodInfo.FoodCardProps) {
    const dispatch = useDispatch();

    const [sizeIndex, setSizeIndex] = React.useState(0);

    const [size, setSize] = React.useState(sizes[0]);

    const itemInCart = useSelector(findItemInCart(label, size));

    return (
        <article className={styles.foodCard}>
            <Link to={`/foods/${id}`} className={styles.link}>
                <img className={styles.img} src={imageUrl} alt="food image" />
                <h3 className={styles.title}>{label}</h3>
            </Link>
            <div className={styles.options}>
                <ul className={styles.optionsList}>
                    {sizes.map((size, index) => {
                        return (
                            <li
                                key={index}
                                className={`${styles.optionItem} ${
                                    sizeIndex === index ? styles.optionItemActive : null
                                }`}
                            >
                                <button
                                    className={styles.optionButton}
                                    onClick={() => {
                                        setSizeIndex(index);
                                        setSize(size);
                                    }}
                                >
                                    {size}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.footer}>
                <p className={styles.price}>от {price} Р</p>
                <button
                    className={styles.addButton}
                    onClick={() => {
                        dispatch(
                            addItemToCart({
                                label: label,

                                size: size,
                                img: imageUrl,
                                price: price,
                            })
                        );
                    }}
                >
                    <span style={{ fontSize: "25px" }}>+</span>&nbsp;Добавить
                    {itemInCart && <span className={styles.count}>{itemInCart.amount}</span>}
                </button>
            </div>
        </article>
    );
}
