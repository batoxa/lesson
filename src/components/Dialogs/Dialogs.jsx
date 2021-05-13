import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from "./Dialogs.module.css";
import DialogsForm from "./DialogsForm";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id} />
    ));
    const messagesElements = props.dialogsPage.messagesData.map((message) => (
        <Message message={message.message} id={message.id} newMessageText={props.newMessageText} key={message.id} />
    ));

    const newMessage = (formData) => {
        props.addMessage(formData.newMessage);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>{dialogsElements}</div>
            <div className={styles.messages}>
                {messagesElements}
                <div className={styles.newMessage}>
                    <DialogsForm onSubmit={newMessage} />
                </div>
            </div>
        </div>
    );
};
export default Dialogs;
