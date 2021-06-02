import { stopSubmit } from "redux-form";
import { authAPI } from "../components/api/api";

const SET_USERS_DATA = "auth/SET-USERS-DATA";

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
            };

        default:
            return state;
    }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USERS_DATA,
    data: { userId, login, email, isAuth },
});

export const authenticationUser = () => async(dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
};

export const loginUser = (email, password, rememberMe) => async(dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(authenticationUser());
    } else {
        const err = response.data.messages.length > 0 ? response.data.messages[0] : "Email or password is wrong"
        return dispatch(stopSubmit("login", { _error: err }));
    }
};

export const logoutUser = () => async(dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;