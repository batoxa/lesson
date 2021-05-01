import React from 'react';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../Preloader/Preloader';


const ProfileInfo = (props) => {
   if (props.user.userId) {
      return (
         <div className={styles.wrapper}>
            <div className={styles.head}>
               <div>
                  <img className={styles.userAvatar} src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt='avatar' />
               </div>
               <div className={styles.userData}>
                  <div className={styles.userName}>{props.user.fullName}</div>
                  <div >{props.user.aboutMe}</div>
                  <div className={styles.job}>
                     {`${props.user.lookingForAJob ? "I seek job" : "I'm working"}
                     ${props.user.lookingForAJobDescription != null ? " - " : ""}
                      ${props.user.lookingForAJobDescription != null ? props.user.lookingForAJobDescription : ""}`}
                  </div>
                  <div className={styles.contacts}>{props.user.contacts.facebook}</div>
                  <div className={styles.contacts}>{props.user.contacts.github}</div>
                  <div className={styles.contacts}>{props.user.contacts.instagram}</div>
                  <div className={styles.contacts}>{props.user.contacts.twitter}</div>
                  <div className={styles.contacts}>{props.user.contacts.vk}</div>
               </div>
            </div>
         </div>
      );
   }
   return (
      <div className={styles.preloader}>
         <Preloader />
      </div>
   );

}

export default ProfileInfo;
