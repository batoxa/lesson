import React from 'react';
import { addPostActionCreater, updateNewPostActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
   let state = props.store.getState();

   let addingPost = () => {
      props.store.dispatch(addPostActionCreater());
   }

   let onPostChange = (text) => {
      props.store.dispatch(updateNewPostActionCreater(text));
   }

   return (<MyPosts
      updateNewPostActionCreater={onPostChange}
      addPost={addingPost}
      posts={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
   />)
}

export default MyPostsContainer;
