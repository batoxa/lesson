import { profileAPI } from "../components/api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    postData: [
        { id: 1, message: "Hi, how are you?", likecounts: 5 },
        { id: 2, message: "Ok", likecounts: 3 },
        { id: 3, message: "Yoooo, nice!", likecounts: 7 }
    ],
    userData: {},
    newPostText: "",
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_PROFILE:
            return { ...state, userData: action.userData };

        case SET_STATUS:
            return { ...state, status: action.status };

        case ADD_POST: {
            let newPost = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likecounts: 0
            };
            let stateCopy = { ...state };
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        };

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        };

        default:
            return state;
    }
}

export const setUserStatus = (status) => ({ type: SET_STATUS, status: status });
export const setUserProfile = (userData) => ({ type: SET_USER_PROFILE, userData: userData });
export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.userProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    };
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.userStatus(userId).then((data) => {
            dispatch(setUserStatus(data));
        });
    };
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.resultCode === 0) { dispatch(setUserStatus(status)) };
        });
    };
};

export default profileReducer;
