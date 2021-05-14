import React from "react";
import styles from "./Textarea.module.css";
import classNames from "classnames";

export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={classNames(styles.textarea, { [styles.error]: meta.error && meta.touched })}>
            <textarea {...input} {...props} />
            {meta.error && meta.touched ? <span>{meta.error}</span> : ""}
        </div>
    )
};

