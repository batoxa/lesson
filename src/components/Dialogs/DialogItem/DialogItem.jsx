import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
   return (
      <div className={styles.dialog}>
         <NavLink to={"/dialogs/" + props.id} activeClassName={styles.active}>
            <img className={styles.avatar} src={props.avatar} alt="logo"></img>
            <div className={styles.name}>{props.name}</div>
         </NavLink>
      </div>
   );
}

export default DialogItem;



