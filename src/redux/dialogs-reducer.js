const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: state.messagesData.length + 1,
            message: state.newMessageText,
            likecounts: 0
         };
         state.messagesData.push(newMessage);
         state.newMessageText = '';
         return state;

      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newText;
         return state;

      default:
         return state;
   }
}

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });
export const updateNewMessageActionCreater = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;