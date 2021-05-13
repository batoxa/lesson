import { authAPI } from "../components/api/api";
import { Redirect } from "react-router";


const SET_USERS_DATA = "SET-USERS-DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };

        default:
            return state;
    }
};

export const setAuthUserData = (userId, login, email) => ({
    type: SET_USERS_DATA,
    data: { userId, login, email },
});

export const authenticationUser = () => {
    return (dispatch) => {
        authAPI.authMe().then((data) => {
            if (data.resultCode === 0) {
                const { id, login, email } = data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
    };
};

export const loginUser = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe, captcha).then((data) => {
            console.log("data" + data);
            if (data.resultCode === 0) {
                dispatch(authenticationUser()); <
                Redirect to = { '/profile' }
                />
            }
        });
    };
};

export default authReducer;