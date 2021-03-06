import { profileAPI } from "../components/api/api";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';

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

        case ADD_POST:
            {
                let newPost = {
                    id: state.postData.length + 1,
                    message: action.newPostText,
                    likecounts: 0
                };
                let stateCopy = { ...state };
                stateCopy.postData = [...state.postData];
                stateCopy.postData.push(newPost);
                return stateCopy;
            };
        case DELETE_POST:
            return { ...state, postData: state.postData.filter(post => post.id !== action.postId) };


        default:
            return state;
    }
}

export const setUserStatus = (status) => ({ type: SET_STATUS, status: status });
export const setUserProfile = (userData) => ({ type: SET_USER_PROFILE, userData: userData });
export const addPostActionCreater = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePostActionCreater = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.userProfile(userId);
        dispatch(setUserProfile(data));
    };
};

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.userStatus(userId)
        dispatch(setUserStatus(data));
    };
};

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status);
        if (response.resultCode === 0) { dispatch(setUserStatus(status)) };
    };
};

export { profileReducer };