let renderTree =()=>{
   console.log('State changed');
};

let state = {

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

}

window.state=state;

export const addPost = () => {
   let newPost = {
      id: state.profilePage.postData.length + 1,
      message: state.profilePage.newPostText,
      likecounts: 0
   };
   state.profilePage.postData.push(newPost);
   state.profilePage.newPostText = '';
   renderTree(state);
}

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   renderTree(state);
}

export const addMessage = () => {
   let newMessage = {
      id: state.dialogsPage.messagesData.length + 1,
      message: state.dialogsPage.newMessageText,
      likecounts: 0
   };
   state.dialogsPage.messagesData.push(newMessage);
   state.dialogsPage.newMessageText = '';
   renderTree(state);
}

export const updateNewMessageText = (newText) => {
   state.dialogsPage.newMessageText = newText;
   renderTree(state);
}

export const subscribe=(observer)=>{
   renderTree=observer;
}

export default state;