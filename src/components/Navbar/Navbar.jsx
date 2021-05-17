import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
// import NavFriend from './NavFriend/NavFriend';

const Navbar = (props) => {

   // let friends = props.state.friendData.map(friend => <NavFriend name={friend.name} avatar={friend.avatar} key={friend.id}/>);

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
               <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
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
            <li className={styles.sett}>
               <a className={styles.link} href="https://social-network.samuraijs.com/api/1.0/" target="_blank" rel="noreferrer">API</a>
            </li>
         </ul>
         {/* <div className={styles.fri}>Friends</div>
         <div className={styles.friends}>
            {friends}
         </div> */}

      </div>
   );
}

export default Navbar;
