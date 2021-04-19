import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   return (
      <div className={styles.content}>
         <ProfileInfo user={props.state.userData}/>
         <MyPosts postData={props.state.postData} addPost={props.addPost}/>
      </div>
   );
}

export default Profile;