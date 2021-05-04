import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree = () => {
    ReactDOM.render(<App appState={store.getState()}
                         addPost={store.addPost.bind(store)}
                         updateNewPostText={store.updateNewPostText.bind(store)}
                         addMessage={store.addMessage.bind(store)}
                         updateNewMessageText={store.updateNewMessageText.bind(store)}
        />,
        document.getElementById('root'));
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();

