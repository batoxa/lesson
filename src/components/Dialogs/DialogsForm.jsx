import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/Validation/Validation";
import styles from "./Dialogs.module.css";

const DialogsFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={styles.input} name={"newMessage"} placeholder={"Enter your message"} component={"textarea"} autoComplete={"off"} validate={required} />
            <button className={styles.button}>Send</button>
        </form>
    )
};

const DialogsForm = reduxForm({ form: "newDialogsMessage" })(DialogsFormRedux);

export { DialogsForm };
