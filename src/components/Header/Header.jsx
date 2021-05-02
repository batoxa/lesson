import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
   return (
      <header className={styles.header}>
         <img src="../../../logo512.png" height="30px" alt='logo'></img>
         <div className={styles.title}>My social network for learn react js</div>

         <div className={styles.login}>
            {props.isAuth ? <div><i className="fa fa-user" aria-hidden="true" />&nbsp;{props.login}</div> : <NavLink className={styles.link} to={'/login'}><i className="fa fa-user" aria-hidden="true" />&nbsp;Sign In </NavLink>}
         </div>
      </header>
   );
}

export default Header;
