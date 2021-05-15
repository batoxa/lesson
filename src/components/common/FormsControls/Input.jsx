import React from "react";
import styles from "./Textarea.module.css";
import classNames from "classnames";

export const Input = ({ input, meta, ...props }) => {
    return (
        <div className={classNames(styles.textarea, { [styles.error]: meta.error && meta.touched })}>
            <input {...input} {...props} />
            {meta.error && meta.touched ? <span>{meta.error}</span> : ""}
        </div>
    )
};

