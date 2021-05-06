import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
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

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sideBar = sidebarReducer(this._state.sideBar, action);
      this._callSubscriber(this._state)

   }
}

export default store;

window.state = store;


