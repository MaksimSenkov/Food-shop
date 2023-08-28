import { useSelector, useDispatch } from "react-redux";

import { changeCategory } from "../../../../../redux/Navigation/slice";
import { getNavigationItems } from "../../../../../redux/Navigation/selectors";

import styles from "./Navigation.module.css";

export default function Navigation() {
    const dispatch = useDispatch();

    const { navItems, navItemIndex } = useSelector(getNavigationItems);

    return (
        <nav>
            <ul className={styles.nav}>
                {navItems.map((elem, index) => {
                    return (
                        <li key={index}>
                            <button
                                onClick={() => dispatch(changeCategory({ index: index }))}
                                className={`${styles.navItemButton} ${
                                    navItemIndex === index ? styles.navItemActive : null
                                }`}
                            >
                                {elem}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
