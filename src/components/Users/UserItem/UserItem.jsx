import React from 'react';
import styles from './UserItem.module.css';



export const followButton = (followed) => {
   if (followed) {
      return (<button><i className="fa fa-star" aria-hidden="true"></i></button>)
   }
   return (<button><i className="fa fa-star-o" aria-hidden="true"></i></button>);
}


const UserItem = (props) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.avatar}>
            <img src={props.user.avatar} alt='avatar' />
         </div>
         <div className={styles.description}>
            <div className={styles.fullname}>
               {props.user.fullName}
            </div>
            <div className={styles.status}>
               {props.user.status}
            </div>
            <div className={styles.location}>
               {props.user.location.city}, {props.user.location.country}
            </div>
         </div>
         <div className={styles.follow}>
            {followButton(props.user.followed)}
         </div>
      </div>
   );
}

export default UserItem;



