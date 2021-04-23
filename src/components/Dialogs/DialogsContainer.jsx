import React from 'react';
import { addMessageActionCreater, updateNewMessageActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
   let dialogsPage = props.store.getState().dialogsPage;
   
   let onMessageChange = (text) => {
      props.store.dispatch(updateNewMessageActionCreater(text));
   };

   let addMessage = () => {
      props.store.dispatch(addMessageActionCreater());
   };

   return (
      <Dialogs
         dialogsPage={dialogsPage}
         updateNewMessageActionCreater={onMessageChange}
         addMessage={addMessage}
      />);
}

export default DialogsContainer;



