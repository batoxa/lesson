import React from "react";
import styles from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { required, maxLength } from "../../../utils/Validation/Validation";
import { Textarea } from "../../common/FormsControls/Textarea";

export const maxLengthPost = maxLength(300)

const MyPostsFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={styles.input} name={"newPostText"} placeholder={"New posts"} component={Textarea} autoComplete={"off"} validate={[required, maxLengthPost]} />
            <button className={styles.button}>Add post</button>
        </form>
    );
};

const MyPostsForm = reduxForm({ form: "newProfilePost" })(MyPostsFormRedux);

export { MyPostsForm };
