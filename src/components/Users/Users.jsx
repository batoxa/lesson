import * as axios from 'axios';
import React from 'react';
// import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {

   if (props.users.length === 0) {

      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            props.setUsers(response.data.items)
         })
   }

   // followUser = (userId) => () => props.followUser(userId)

   const userElements = props.users.map(user =>
      <div className={styles.itemwrapper}>
         <div className={styles.avatar}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='avatar' />
         </div>
         <div className={styles.description}>
            <div className={styles.fullname}>
               {user.name}
            </div>
            <div className={styles.status}>
               {user.status === null? "user.status": user.status}
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

      // <UserItem user={user} />
   )

   return (
      <div className={styles.wrapper}>
         <div className={styles.head}>Users list:</div>
         {userElements}
      </div>
   );
}

export default Users;