import React from "react";
import styles from "./Login.module.css";
import LoginReduxForm from "./LoginForm/LoginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.loginUser(formData.email, formData.password, formData.rememberMe);
    };
    const logoutUser = () => {
        props.logoutUser();
    };
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.text}> Login </h1>
            {!props.isAuth ? (
                <LoginReduxForm onSubmit={onSubmit} />
            ) : (
                <button className={styles.button} onClick={logoutUser}>
                    Logout
                </button>
            )}
        </div>
    );
};

export default Login;
