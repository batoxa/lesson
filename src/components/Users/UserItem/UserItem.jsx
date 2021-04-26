import React from 'react';
import styles from './UserItem.module.css';


export const followButton = (followed) => {
   if (followed) {
      return (<button><i class="fa fa-star-o" aria-hidden="true"></i></button>)
   }
   return (<button> <i class="fa fa-star-o" aria-hidden="true"></i></button>);
}
const UserItem = (props) => {


   return (
      <div className={styles.wrapper}>
         <div className={styles.avatar}>
            <img src='' alt='avatar' />
         </div>
         <div className={styles.description}>
            <div className={styles.fullname}>
               {/* {props.fullName} */}
               fullName
            </div>
            <div className={styles.status}>
               {/* {props.status} */}
               Status
            </div>
            <div className={styles.location}>
               {/* {props.location.city}, {props.location.country} */}
               City, Country
            </div>
         </div>
         <div className={styles.follow}>
            {followButton(props.followed)};
         </div>
      </div>
   );
}

export default UserItem;



