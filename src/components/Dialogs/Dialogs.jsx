import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
   let messagesElements = props.state.messagesData.map(message => <Message message={message.message} id={message.id} newMessageText={props.newMessageText} />);

   let newMessageElement = React.createRef();

   let addMessage = () => {
      props.addMessage();
      props.updateNewMessageText('');
   };

   let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.updateNewMessageText(text);

   };

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogItems}>
            {dialogsElements}
         </div>
         <div className={styles.messages}>
            {messagesElements}
            <div className={styles.newMessage}>
               <div>
                  <textarea onChange={onMessageChange} ref={newMessageElement} placeholder="New message" rows="3" value={props.state.newMessageText} />
               </div>
               <div>
                  <button onClick={addMessage}>Send</button>
               </div>
            </div>
         </div>
      </div >
   );
}
export default Dialogs;



