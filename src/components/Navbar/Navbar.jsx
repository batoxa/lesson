import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {
   return (
      <div className={styles.nav}>
         <ul className={styles.font}>
            <li>
               <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
            </li>
            <li>
               <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
            </li>
            <li>
               <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
            </li>
            <li>
               <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
            </li>
            <li className={styles.sett}>
               <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
            </li>
         </ul>
         <div className={styles.fri}>Friends</div>
         <div className={styles.friends}>
            <div className={styles.friend}>
               <img className={styles.avatar} src={props.state[0].avatar} alt="logo"></img>
               <div className={styles.name}>{props.state[0].name}</div>
            </div>
            <div className={styles.friend}>
               <img className={styles.avatar} src={props.state[1].avatar} alt="logo"></img>
               <div className={styles.name}>{props.state[1].name}</div>
            </div>
            <div className={styles.friend}>
               <img className={styles.avatar} src={props.state[2].avatar} alt="logo"></img>
               <div className={styles.name}>{props.state[2].name}</div>
            </div>
         </div>

      </div>
   );
}

export default Navbar;
