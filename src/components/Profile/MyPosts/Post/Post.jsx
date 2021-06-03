import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
   return (
      <div className={styles.Post}>
         <div className={styles.content}>
            <img src="https://cdn0.youla.io/files/images/780_780/5f/90/5f907789ac062358697e54d5-1.jpg" alt="face"></img>
            <div className={styles.txt}>
               {props.message}
            </div>
            <div className={styles.like}>
               <i className="fa fa-thumbs-up" aria-hidden="true"></i>  {props.likecounts}
            </div>
         </div>
      </div>
   );
}

export { Post };
