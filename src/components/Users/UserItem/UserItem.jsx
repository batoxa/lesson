import React from 'react';
import styles from './UserItem.module.css';
import userPhoto from '../../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api'


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
               ? <button disabled={props.isFollow.some(id => id === props.user.id)} onClick={() => {
                  props.toggleIsFollow(true, props.user.id);
                  userAPI.setUnfollow(props.user.id)
                     .then(data => {
                        if (data.resultCode === 0) {
                           props.unfollowUser(props.user.id)
                        }
                        props.toggleIsFollow(false, props.user.id);
                     });
               }}><i className="fa fa-star" aria-hidden="true" />
               </button>
               : <button disabled={props.isFollow.some(id => id === props.user.id)} onClick={() => {
                  props.toggleIsFollow(true, props.user.id);
                  userAPI.setFollow(props.user.id)
                     .then(data => {
                        if (data.resultCode === 0) {
                           props.followUser(props.user.id)
                        }
                        props.toggleIsFollow(false, props.user.id);
                     });
               }}><i className="fa fa-star-o" aria-hidden="true" />
               </button>
            }
         </div>
      </div >
   );
}

export default UserItem;



