import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../Validation/Validation";
import { Input } from "../../common/FormsControls/Input";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
    console.log(props.error);
    return (
        <form className={styles.table} onSubmit={props.handleSubmit}>
            <Field
                className={styles.input}
                name={"email"}
                placeholder={"E-mail"}
                component={Input}
                type={"email"}
                validate={[required]}
            />
            <Field
                className={styles.input}
                name={"password"}
                placeholder={"Password"}
                component={Input}
                type={"password"}
                validate={[required]}
            />
            <div className={styles.checkbox}>
                <Field type={"checkbox"} component={"input"} name={"rememberMe"} />
                Remember Me
            </div>
            {props.error && <div className={styles.error}>{props.error}</div>}
            <button className={styles.button} type={"submit"}>
                Sign In
            </button>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
