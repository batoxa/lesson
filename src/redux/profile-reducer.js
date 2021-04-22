const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   postData: [
      { id: 1, message: "Hi, how are you?", likecounts: 5 },
      { id: 2, message: "Ok", likecounts: 3 },
      { id: 3, message: "Yoooo, nice!", likecounts: 7 }
   ],
   userData: [
      { id: 1, name: "Batoxa", avatar: "https://st3.depositphotos.com/3687485/13283/v/950/depositphotos_132834058-stock-illustration-bread-vector-illustration.jpg" }
   ],
   newPostText: ""
};

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: state.postData.length + 1,
            message: state.newPostText,
            likecounts: 0
         };
         state.postData.push(newPost);
         state.newPostText = '';
         return state;

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;

      default:
         return state;
   }
}

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;