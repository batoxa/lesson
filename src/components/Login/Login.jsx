import React from "react";
import styles from "./Login.module.css";
import LoginReduxForm from "./LoginForm/LoginForm";

const Login = (props) => {
    const onSubmit =(formData)=>{
        console.log(formData.rememberMe);
    }
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.text}>
                Login - <a href='http://localhost:3000/profile/16823'>16823</a>
            </h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};



export default Login;
