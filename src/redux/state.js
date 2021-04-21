const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
   _state: {
      sideBar: {
         friendData: [
            { id: 1, name: "Wise", avatar: "https://2.bp.blogspot.com/-P1KHVukRJpE/V8Tz6r0eZ8I/AAAAAAACFW0/I0r732kp2wgPSqXBFl0i_DkCndzrY5rLACLcB/s320/Wise.png" },
            { id: 2, name: "Total", avatar: "https://media.istockphoto.com/vectors/cow-icon-vector-id652692584" },
            { id: 3, name: "Tendo", avatar: "https://yt3.ggpht.com/ytc/AAUvwnhHlQn5yh79uOtvDHMJmYXZ3sXnqycPw4SHFMRB=s900-c-k-c0x00ffffff-no-rj" }
         ]
      },
      profilePage: {
         postData: [
            { id: 1, message: "Hi, how are you?", likecounts: 5 },
            { id: 2, message: "Ok", likecounts: 3 },
            { id: 3, message: "Yoooo, nice!", likecounts: 7 }
         ],
         userData: [
            { id: 1, name: "Batoxa", avatar: "https://st3.depositphotos.com/3687485/13283/v/950/depositphotos_132834058-stock-illustration-bread-vector-illustration.jpg" }
         ],
         newPostText: ""
      },
      dialogsPage: {
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
   },

   _callSubscriber() {
      console.log('State changed');
   },

   getState() {
      return this._state;
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {  // {type: 'ADD-POST'}

      if (action.type === ADD_POST) {
         let newPost = {
            id: this._state.profilePage.postData.length + 1,
            message: this._state.profilePage.newPostText,
            likecounts: 0
         };
         this._state.profilePage.postData.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state)

      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state)

      } else if (action.type === ADD_MESSAGE) {
         let newMessage = {
            id: this._state.dialogsPage.messagesData.length + 1,
            message: this._state.dialogsPage.newMessageText,
            likecounts: 0
         };
         this._state.dialogsPage.messagesData.push(newMessage);
         this._state.dialogsPage.newMessageText = '';
         this._callSubscriber(this._state)

      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
         this._state.dialogsPage.newMessageText = action.newText;
         this._callSubscriber(this._state)
      }
   }
}

export const addPostActionCreater = () => ({ type: ADD_POST });

export const updateNewPostActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreater = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default store;

window.state = store;


