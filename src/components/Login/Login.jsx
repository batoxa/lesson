import React from "react";
import styles from "./Login.module.css";
import { LoginReduxForm } from "./LoginForm/LoginForm";
import { Redirect } from "react-router";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe);
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.text}> Login </h1>
            {!props.isAuth ? <LoginReduxForm onSubmit={onSubmit} /> : <Redirect to={`/profile/${props.userId}`} />}
        </div>
    );
};

export { Login };
