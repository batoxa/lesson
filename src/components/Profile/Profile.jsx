import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   // const state = props.store.getState();
   return (
      <div className={styles.content}>
         {/* <ProfileInfo user={state.profilePage.userData}/> */}
         <ProfileInfo name={"Batoxa"} avatar={"https://st3.depositphotos.com/3687485/13283/v/950/depositphotos_132834058-stock-illustration-bread-vector-illustration.jpg"}/>
         <MyPostsContainer />
      </div>
   );
}

export default Profile;