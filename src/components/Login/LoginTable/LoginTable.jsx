import React from "react";
import styles from "./LoginTable.module.css";

const LoginTable = (props) => {
    return (
        <table className={styles.table }>
            <input className={styles.input} type="Login" placeholder="Login" />
            <input className={styles.input}type="Password" placeholder="Password" />
            <div className={styles.checkbox}><input  type="checkbox" value="RememberMe"/>Remember Me</div>
            <button className={styles.button}>Sign In</button>
        </table>);
};

export default LoginTable;
