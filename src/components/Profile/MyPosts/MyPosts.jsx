import React from "react";
import DialogsForm from "../../Dialogs/DialogsForm";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const posts = props.posts.map((post) => <Post message={post.message} likecounts={post.likecounts} key={post.id} />);

    const addingPost = (newPostText) => {
        props.addPost(newPostText.newMessage);
        console.log(newPostText.newMessage);
    };

    return (
        <div className={styles.MyPosts}>
            <h1>My posts</h1>
            <DialogsForm onSubmit={addingPost} />
            <div className={styles.Post}>{posts}</div>
        </div>
    );
};

export default MyPosts;
