import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeSortType } from "../../../../../redux/Sort/slice";
import { getSortSlice } from "../../../../../redux/Sort/selectors";

import styles from "./Sort.module.css";

export default function Sort() {
    const dispatch = useDispatch();

    const { sortValues, sortId } = useSelector(getSortSlice);

    const [isPopupShown, setIsPopupShown] = React.useState(false);

    const sortRef = React.useRef<HTMLDivElement>(null);

    const SORT_LABEL: string = sortValues[sortId].label;

    React.useEffect(() => {
        const clickOutside = (event: MouseEvent) => {
            if (!event.composedPath().includes(sortRef.current!)) {
                setIsPopupShown(false);
            }
        };

        document.body.addEventListener("click", clickOutside);

        return () => {
            document.body.removeEventListener("click", clickOutside);
        };
    }, []);

    function togglePopup() {
        setIsPopupShown((prev) => !prev);
    }

    return (
        <div ref={sortRef} className={styles.sort}>
            <h3 className={styles.sortHeader}>
                Сортировка по:
                <button onClick={togglePopup} className={styles.sortValue}>
                    {SORT_LABEL}
                </button>
            </h3>

            {isPopupShown && (
                <ul className={styles.sortValueListPopUp}>
                    {sortValues.map((elem: Sort.SortValue, index: number) => {
                        return (
                            <li key={index}>
                                <button
                                    onClick={() => {
                                        togglePopup();

                                        dispatch(changeSortType({ index: index }));
                                    }}
                                    className={`${styles.listElemButton} ${
                                        sortId === index ? styles.listElemButtonSelected : null
                                    }`}
                                >
                                    {elem.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
