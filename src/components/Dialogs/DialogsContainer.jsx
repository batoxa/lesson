// import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreater, updateNewMessageActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToPrors = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}

let mapDispatchToPrors = (dispatch) => {
   return {
      updateNewMessageActionCreater: (text) => {
         dispatch(updateNewMessageActionCreater(text));
      },
      addMessage: () => {
         dispatch(addMessageActionCreater());
      }
   }
}

const DialogsContainer = connect(mapStateToPrors, mapDispatchToPrors)(Dialogs);

export default DialogsContainer;



