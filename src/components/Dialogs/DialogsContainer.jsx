// import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreater, updateNewMessageActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      isAuth: state.auth.isAuth,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageActionCreater: (text) => {
         dispatch(updateNewMessageActionCreater(text));
      },
      addMessage: () => {
         dispatch(addMessageActionCreater());
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;



