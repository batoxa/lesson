import React from "react";
import styles from "./MyPosts.module.css";
import { MyPostsForm } from "./MyPostsForm";
import { Post } from "./Post/Post";

const MyPosts = React.memo((props) => {
    const posts = props.posts.map((post) => <Post message={post.message} likecounts={post.likecounts} key={post.id} />);

    const addingPost = (newPostText) => {
        props.addPost(newPostText.newPostText);
        console.log(newPostText.newPostText);
    };

    return (
        <div className={styles.MyPosts}>
            <h1>My posts</h1>
            <MyPostsForm onSubmit={addingPost} />
            <div className={styles.Post}>{posts}</div>
        </div>
    );
});

export { MyPosts };
