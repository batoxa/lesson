import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);
   let messagesElements = props.state.messagesData.map(message => <Message message={message.message} id={message.id}/>);

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogItems}>
            {dialogsElements}
         </div>
         <div className={styles.messages}>
            {messagesElements}
         </div>
      </div >
   );
}
export default Dialogs;



