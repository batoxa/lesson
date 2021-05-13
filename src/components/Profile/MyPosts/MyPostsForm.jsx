import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./MyPosts.module.css";

const MyPostsFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={styles.input} name={"newPostText"} placeholder={"New posts"} component={"input"} />
            <button>Add post</button>
        </form>
    );
};

const MyPostsForm = reduxForm({ form: "newProfilePost" })(MyPostsFormRedux);

export default MyPostsForm;
