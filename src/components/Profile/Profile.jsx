import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   return (
      <div>
         <div className={styles.head}></div>
         <ProfileInfo user={props.user} status={props.status} updateUserStatus={props.updateUserStatus}/>
         <MyPostsContainer />
      </div>
   );
}

export default Profile;