import React from 'react';
import styles from './UserItem.module.css';
import userPhoto from '../../../assets/images/user.png';

const UserItem = (props) => {
   return (
      <div className={styles.itemwrapper} key={props.user.id}>
      <div className={styles.avatar}>
         <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt='avatar' />
      </div>
      <div className={styles.description}>
         <div className={styles.fullname}>
            {props.user.name}
         </div>
         <div className={styles.status}>
            {props.user.status === null ? "Скрытный тип" : props.user.status}
         </div>
         <div className={styles.location}>
            {"Деревенск"}, {"Замкадия"}
         </div>
      </div>
      <div className={styles.follow}>
         {props.user.followed
            ? <button onClick={() => props.unfollowUser(props.user.id)}>
               <i className="fa fa-star" aria-hidden="true" />
            </button>
            : <button onClick={() => props.followUser(props.user.id)}>
               <i className="fa fa-star-o" aria-hidden="true" />
            </button>}
      </div>
   </div>
   );
}

export default UserItem;



