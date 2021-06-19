import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users_reducer";
import  thunkMiddleware from 'redux-thunk';
import auth_reducer from "./auth_reducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage :profileReducer,
    messagesPage: dialogsReducer,
    usersPage : usersReducer,
    auth: auth_reducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
