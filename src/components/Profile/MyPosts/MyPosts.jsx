import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   let posts = props.postData.map(post => <Post message={post.message} likecounts={post.likecounts} />);

   let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value;
      alert(text);
   };

   return (
      <div className={styles.MyPosts}>
         <h1>My posts</h1>
         <div className={styles.NewPost}>
            <div>
               <textarea ref={newPostElement} placeholder="New posts" rows="3"></textarea>
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         <div className={styles.Post}>
            {posts}
         </div>
      </div>
   );
}

export default MyPosts;
