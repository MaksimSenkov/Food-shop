import { useNavigate } from "react-router-dom";
import styles from "./BasketEmpty.module.css";

export default function BasketEmpty() {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Корзина пуста :(</h2>
            <button className={styles.button} onClick={() => navigate(-1)}>
                Вернуться назада?
            </button>
        </div>
    );
}
