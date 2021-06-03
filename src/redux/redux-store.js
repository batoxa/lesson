import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { appReducer } from "./app-reducer";
import { authReducer } from "./auth-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({

    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sidebarReducer,
    auth: authReducer,
    form: formReducer

});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;

export { store };