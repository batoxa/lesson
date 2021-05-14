import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLength } from "../../../Validation/Validation";
import styles from "./MyPosts.module.css";

export const maxLengthPost = maxLength(300)

const MyPostsFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={styles.input} name={"newPostText"} placeholder={"New posts"} component={"textarea"} autocomplete={"off"} validate={[required, maxLengthPost]} />
            <button className={styles.button}>Add post</button>
        </form>
    );
};

const MyPostsForm = reduxForm({ form: "newProfilePost" })(MyPostsFormRedux);

export default MyPostsForm;
