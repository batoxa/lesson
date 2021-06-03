import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
   return (
      <div className={styles.message}>
         <div className={styles.author}>{props.id}</div>
         <div className={styles.messageText}>
            {props.message}
         </div>
      </div>
   );
}
export { Message };



