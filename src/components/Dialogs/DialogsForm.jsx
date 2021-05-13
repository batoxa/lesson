import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./Dialogs.module.css";

const DialogsFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={styles.input} name={"newMessage"} placeholder={"Enter your message"} component={"input"} />
            <button className={styles.button}>Send</button>
        </form>
    )
};

const DialogsForm = reduxForm({ form: "newDialogsMessage" })(DialogsFormRedux);

export default DialogsForm;