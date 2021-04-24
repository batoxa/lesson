// import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToPrors = (state) => {
   return {
      posts: state.profilePage.postData,
      newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToPrors = (dispatch) => {
   return {
      updateNewPostActionCreater: (text) => {
         dispatch(updateNewPostActionCreater(text));
      },
      addPost: () => {
         dispatch(addPostActionCreater());
      }
   }
}

const MyPostsContainer = connect (mapStateToPrors, mapDispatchToPrors)(MyPosts);


export default MyPostsContainer;
