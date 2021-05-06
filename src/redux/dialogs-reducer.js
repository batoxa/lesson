const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
   messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "Yoooo" }
   ],
   newMessageText: "",
   dialogsData: [
      { id: 1, name: "Wise", avatar: "https://2.bp.blogspot.com/-P1KHVukRJpE/V8Tz6r0eZ8I/AAAAAAACFW0/I0r732kp2wgPSqXBFl0i_DkCndzrY5rLACLcB/s320/Wise.png" },
      { id: 2, name: "Total", avatar: "https://media.istockphoto.com/vectors/cow-icon-vector-id652692584" },
      { id: 3, name: "ZloySky", avatar: "https://yt3.ggpht.com/ytc/AAUvwnjN-7ImWo3a5BUbV-LRQrYFGTjHG_vctOYz4NCf=s900-c-k-c0x00ffffff-no-rj" },
      { id: 4, name: "Skawolf", avatar: "https://yt3.ggpht.com/a/AATXAJxdL0vOU2JGwmuP9TlOhXlCf8Pm9LHVk18YE1Xo=s900-c-k-c0x00ffffff-no-rj" },
      { id: 5, name: "Tendo", avatar: "https://yt3.ggpht.com/ytc/AAUvwnhHlQn5yh79uOtvDHMJmYXZ3sXnqycPw4SHFMRB=s900-c-k-c0x00ffffff-no-rj" }
   ]
}

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {

      case ADD_MESSAGE:
         let newMessage = {
            id: state.messagesData.length + 1,
            message: state.newMessageText,
            likecounts: 0
         };
         return {
            ...state,
            newMessageText: '',
            messagesData: [...state.messagesData, newMessage]
         };

      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newText
         };

      default:
         return state;
   }
}

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });
export const updateNewMessageActionCreater = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;