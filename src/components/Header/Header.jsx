import React from 'react';
import styles from'./Header.module.css';

const Header = () => {
   return (
      <header className={styles.header}>
         <img src="../../../logo512.png" height="30px" alt='logo'></img>
         <div className={styles.title}>My social network for learn react js</div>
         </header>
   );
}

export default Header;
