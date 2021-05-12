import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {

    return (
        <form className={styles.table} onSubmit={props.handleSubmit}>
            <Field className={styles.input} name={"email"} placeholder={"E-mail"} component={"input"} />
            <Field className={styles.input} name={"password"} placeholder={"Password"} component={"input"} />
            <div className={styles.checkbox}>
                <Field type={"checkbox"} component={"input"} name={"rememberMe"} />
                Remember Me
            </div>
            <button className={styles.button} type={"submit"}>
                Sign In
            </button>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
