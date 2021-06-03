import { authenticationUser } from "./auth-reducer";

const INITIALIZED_SUCSESS = "app/INITIALIZED-SUCSESS";

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCSESS:
            return {
                ...state,
                initialized: true,
            };

        default:
            return state;
    }
};

export const initializedSucsess = () => ({ type: INITIALIZED_SUCSESS });

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(authenticationUser());
    Promise.all([promise]).then(() =>
        dispatch(initializedSucsess())
    );
};

export { appReducer };