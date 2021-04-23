import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   const state = props.store.getState();
   return (
      <div className={styles.content}>
         <ProfileInfo user={state.profilePage.userData}/>
         <MyPostsContainer store={props.store}/>
      </div>
   );
}

export default Profile;