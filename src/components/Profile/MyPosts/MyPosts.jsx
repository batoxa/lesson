import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   let posts = props.postData.map(post=><Post message={post.message} likecounts={post.likecounts} />);

   return (
      <div className={styles.MyPosts}>
         <h1>My posts</h1>
         <div className={styles.NewPost}>
            <div>
               <textarea placeholder="New posts" rows="3"></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={styles.Post}>
            {posts}
         </div>
      </div>
   );
}

export default MyPosts;
