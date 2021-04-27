import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {

   const getUsers = () => {
      if (props.users.length === 0) {
         axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
               props.setUsers(response.data.items)
            })
      }
   }

   return (
      <div className={styles.wrapper}>
         {props.users.length !== 0 ? null : <button onClick={getUsers}>Get Users</button>}
         {props.users.length === 0 ? null : <div className={styles.head}>Users list:</div>}
         {props.users.map(user =>
            <div className={styles.itemwrapper} key={user.id}>
               <div className={styles.avatar}>
                  <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='avatar' />
               </div>
               <div className={styles.description}>
                  <div className={styles.fullname}>
                     {user.name}
                  </div>
                  <div className={styles.status}>
                     {user.status === null ? "user.status" : user.status}
                  </div>
                  <div className={styles.location}>
                     {"user.location.city"}, {"user.location.country"}
                  </div>
               </div>
               <div className={styles.follow}>
                  {user.followed
                     ? <button onClick={() => props.unfollowUser(user.id)}>
                        <i className="fa fa-star" aria-hidden="true" />
                     </button>

                     : <button onClick={() => props.followUser(user.id)}>
                        <i className="fa fa-star-o" aria-hidden="true" />
                     </button>}
               </div>
            </div>
         )
         }
      </div>
   );
}

export default Users;