import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   let posts = props.postData.map(post => <Post message={post.message} likecounts={post.likecounts} key={post.id} />);

   let newPostElement = React.createRef();

   let addingPost = () => {
      props.addPost();
      props.updateNewPostText('');
   };

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);

   };
   return (
      <div className={styles.MyPosts}>
         <h1>My posts</h1>
         <div className={styles.NewPost}>
            <div>
               <textarea onChange={onPostChange} ref={newPostElement} placeholder="New posts" rows="3" value={props.newPostText} />
            </div>
            <div>
               <button onClick={addingPost}>Add post</button>
            </div>
         </div>
         <div className={styles.Post}>
            {posts}
         </div>
      </div>
   );
}

export default MyPosts;
