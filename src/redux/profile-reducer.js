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
      case ADD_POST:{
         let newPost = {
            id: state.postData.length + 1,
            message: state.newPostText,
            likecounts: 0
         };
         let stateCopy = { ...state };
         stateCopy.postData = [...state.postData];
         stateCopy.postData.push(newPost);
         stateCopy.newPostText = '';
         return stateCopy;}

      case UPDATE_NEW_POST_TEXT:{
         let stateCopy = { ...state };
         stateCopy.newPostText = action.newText;
         return stateCopy;}

      default:
         return state;
   }
}

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;