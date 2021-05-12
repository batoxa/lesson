import React from "react";
import styles from "./Login.module.css";
import LoginTable from "./LoginTable/LoginTable";

const Login = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.text}>Login - <a href="http://localhost:3000/profile/16823">16823</a></h1>
            <LoginTable />
        </div>
    );
};

export default Login;
