import React from 'react';
import styles from './UserItem.module.css';
import userPhoto from '../../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const UserItem = (props) => {
   return (
      <div className={styles.itemwrapper} key={props.user.id}>
         <div >
            <NavLink to={'/profile/' + props.user.id}><img className={styles.avatar} src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt='avatar' /></NavLink>
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
               ? <button onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
                     withCredentials: true,
                     headers: {
                        "API-KEY": "1b1b17d4-223e-415d-9789-145d350651ec"
                     }
                  })
                     .then(response => {
                        if (response.data.resultCode === 0) {
                           props.unfollowUser(props.user.id)
                        }
                     });
               }}><i className="fa fa-star" aria-hidden="true" />
               </button>
               : <button onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {}, {
                     withCredentials: true,
                     headers: {
                        "API-KEY": "1b1b17d4-223e-415d-9789-145d350651ec"
                     }
                  })
                     .then(response => {
                        console.log(props.user.id);
                        if (response.data.resultCode === 0) {
                           props.followUser(props.user.id)
                        }
                     });
               }}><i className="fa fa-star-o" aria-hidden="true" />
               </button>
            }
         </div>
      </div >
   );
}

export default UserItem;



