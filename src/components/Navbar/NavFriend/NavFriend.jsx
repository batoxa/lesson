import React from 'react';
import styles from './NavFriend.module.css';


const NavFriend = (props) => {
   return (
      <div className={styles.friend}>
         <img className={styles.avatar} src={props.avatar} alt="logo"></img>
         <div className={styles.name}>{props.name}</div>
      </div>
   );
}

export { NavFriend };
