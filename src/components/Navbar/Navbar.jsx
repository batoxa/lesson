import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import NavFriend from './NavFriend/NavFriend';

const Navbar = (props) => {

   let fr = Math.floor(Math.random() * ((props.state.length - 1) - 1) + 1);

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
            <NavFriend friend={props.state[fr - 1]} />
            <NavFriend friend={props.state[fr]} />
            <NavFriend friend={props.state[fr + 1]} />
         </div>

      </div>
   );
}

export default Navbar;
