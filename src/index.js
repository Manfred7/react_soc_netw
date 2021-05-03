import React from 'react';
import './index.css';
import state, {addMessage, addPost, setRerenderProc, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree = () => {
    ReactDOM.render(<App appState={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}
                         addMessage={addMessage}
                         updateNewMessageText={updateNewMessageText}
        />,
        document.getElementById('root'));
}
setRerenderProc(rerenderEntireTree);
rerenderEntireTree();

