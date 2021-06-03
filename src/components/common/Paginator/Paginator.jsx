import React from "react";
import styles from "./Paginator.module.css";
import classNames from "classnames";

const Paginator = (props) => {
    const pages = [];
    if (props.activePage < 9) {
        for (let i = 1; i <= 16; i++) {
            pages.push(i);
        }
    } else {
        for (let i = props.activePage - 8; i <= props.activePage + 8; i++) {
            if (i <= Math.ceil(props.totalUsersCount / props.pageSize)) {
                pages.push(i);
            }
        }
    }

    return (
        <div className={styles.pagesList}>
            Page:
            {pages.map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={classNames(styles.pageNumberButton, {
                        [styles.selected]: props.activePage === pageNumber,
                    })}
                    onClick={() => {
                        props.setActivePage(pageNumber);
                    }}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    );
};

export { Paginator };
