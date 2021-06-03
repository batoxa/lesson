// import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.postData,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: (newPostText) => {
         dispatch(addPostActionCreater(newPostText));
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export { MyPostsContainer };
