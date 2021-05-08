import React from 'react';
import './index.css';
import store from "./redux/redux_store";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./store_context";

export let rerenderEntireTree = () => {

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root'));
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();

