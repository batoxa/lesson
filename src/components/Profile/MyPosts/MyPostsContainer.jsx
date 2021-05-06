// import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.postData,
      newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostActionCreater: (text) => {
         dispatch(updateNewPostActionCreater(text));
      },
      addPost: () => {
         dispatch(addPostActionCreater());
      }
   }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
