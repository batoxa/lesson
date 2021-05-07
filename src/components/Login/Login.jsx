import React from "react";
import styles from "./Login.module.css";

const Login = (props) => {
    return (
        <div className={styles.wrapper}>
            <svg width='50' height='50' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M11.02 3.77l.01-.01.99.99V2.5l-.5-.5h-9l-.51.5v.493L2 3v10.29l.36.46 5 1.72L8 15v-1h3.52l.5-.5v-2.25l-1 1V13H8V4.71l-.33-.46L4.036 3h6.984v.77zM7 14.28l-4-1.34V3.72l4 1.34v9.22zm3.09-6.75h4.97v1h-4.93l1.59 1.6-.71.7-2.47-2.46v-.71l2.49-2.48.7.7-1.64 1.65z'
                />
            </svg>
            <div className={styles.text}>Login - <a href="http://localhost:3000/profile/16823">16823</a></div>
        </div>
    );
};

export default Login;
