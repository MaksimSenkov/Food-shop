import styles from "./FoodList.module.css";

import FoodCard from "./FoodCard/FoodCard";
import FoodCardSkeleton from "./FoodCardSkeleton/FoodCardSkeleton";

import { useSelector } from "react-redux";
import { getNavLabel } from "../../../../../redux/Navigation/selectors";

export default function FoodList({ items }: FoodInfo.FoodListProps) {
    const navLabel = useSelector(getNavLabel);
    return (
        <section>
            <h2 className={styles.heading}>{navLabel}</h2>
            <ul className={styles.list}>
                {items[0]
                    ? items.map((elem) => {
                          return (
                              <li key={elem.id}>
                                  <FoodCard
                                      id={elem.id}
                                      label={elem.label}
                                      imageUrl={elem.imageUrl}
                                      sizes={elem.sizes}
                                      price={elem.price}
                                  />
                              </li>
                          );
                      })
                    : items.map((_, index) => {
                          return (
                              <li key={index}>
                                  <FoodCardSkeleton />
                              </li>
                          );
                      })}
            </ul>
        </section>
    );
}
