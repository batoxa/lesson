import React from 'react';
import styles from './UserItemPreloader.module.css';

const UserItemPreloader = (props) => {
   return (
      <div className={styles.itemwrapper}>
         <div>
            <div className={`${styles.img} ${styles.animatedbg}`}></div>
         </div>
         <div className={styles.description}>
            <div className={`${styles.animatedbg} ${styles.animatedbgtext}`}>
            </div>
            <div className={`${styles.animatedbg} ${styles.animatedbgtext}`}>
            </div>
            <div className={`${styles.animatedbg} ${styles.animatedbgtext}`}>
            </div>
         </div>
      </div>
   );
}

export { UserItemPreloader };



