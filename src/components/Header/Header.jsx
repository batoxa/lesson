import React from 'react';
import styles from './Header.module.css';

const Header = () => {
   return (
      <header className={styles.header}>
         <img src="../../../logo512.png" height="30px" alt='logo'></img>
         <div className={styles.title}>My social network for learn react js</div>
         <div className={styles.login}>
            <i class="fa fa-user" aria-hidden="true"></i> Sign In
         </div>
         <div className={styles.login}>
         <i class="fa fa-user-plus" aria-hidden="true"></i> Sign Up
         </div>
      </header>
   );
}

export default Header;
