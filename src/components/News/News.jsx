import React from "react";
import styles from "./News.module.css";
import { PreloaderWite } from "../common/PreloaderWite/PreloaderWite";

const News = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}> News</div>
            <PreloaderWite />
        </div>
    );
};

export { News };
