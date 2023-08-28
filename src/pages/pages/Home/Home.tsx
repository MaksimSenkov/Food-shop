import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/@types/useAppDispatch";

import FoodList from "./components/BurgerList/FoodList";
import Navigation from "./components/Navigation/Navigation";
import Sort from "./components/Sort/Sort";

import { getNavItemIndex } from "../../../redux/Navigation/selectors";
import { getSearchValue } from "../../../redux/Search/selectors";
import { getFoodItems } from "../../../redux/FoodData/selectors";
import { fetchFoodData } from "../../../redux/FoodData/slice";

import styles from "./Main.module.css";

const TMP_ARRAY = [...new Array(6)];

export default function Home() {
    const dispatch = useAppDispatch();

    const FoodItems = useSelector(getFoodItems);

    const menuItemIndex = useSelector(getNavItemIndex);

    const searchValue = useSelector(getSearchValue);

    React.useEffect(() => {
        dispatch(fetchFoodData(menuItemIndex));
    }, [menuItemIndex]);

    return (
        <main>
            <div className={styles.navWrapper}>
                <Navigation />
                <Sort />
            </div>

            <FoodList
                items={
                    FoodItems.status === "fulfilled"
                        ? FoodItems.data.filter((elem) => {
                              return elem.label.toLowerCase().includes(searchValue.toLowerCase());
                          })
                        : TMP_ARRAY
                }
            />
        </main>
    );
}
