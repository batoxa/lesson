import React from 'react';
import { addPostActionCreater, updateNewPostActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
   let state = props.store.getState();

   let onPostChange = (text) => {
      props.store.dispatch(updateNewPostActionCreater(text));
   }

   let addingPost = () => {
      props.store.dispatch(addPostActionCreater());
   }

   return (<MyPosts
      updateNewPostActionCreater={onPostChange}
      addPost={addingPost}
      posts={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
   />)
}

export default MyPostsContainer;
