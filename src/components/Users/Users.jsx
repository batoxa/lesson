import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';


const Users = (props) => {

   let userElements = props.users.map(user => <UserItem user={user} />)

   console.log(props.users);
   return (
      <div className={styles.wrapper}>
         <div className={styles.head}>Users list:</div>
         {/* <img src="https://clip2net.com/clip/m15961/6266f-clip-246kb.jpg?nocache=1" width="800px" alt="psttern"/> */}
         <UserItem />
         {/* {userElements} */}
      </div>
   );
}

export default Users;
