import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const posts = props.posts.map((post) => <Post message={post.message} likecounts={post.likecounts} key={post.id} />);

    const addingPost = () => {
        props.addPost();
    };

    const onPostChange = (event) => {
        const text = event.target.value;
        props.updateNewPostActionCreater(text);
    };

    return (
        <div className={styles.MyPosts}>
            <h1>My posts</h1>
            <div className={styles.NewPost}>
                <div>
                    <textarea onChange={onPostChange} placeholder='New posts' rows='3' value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addingPost}>Add post</button>
                </div>
            </div>
            <div className={styles.Post}>{posts}</div>
        </div>
    );
};

export default MyPosts;
