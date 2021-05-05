import React from 'react';
import './index.css';
import store from "./redux/redux_store";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree = () => {

    ReactDOM.render(<App appState={store.getState()}
                         dispatch={store.dispatch.bind(store)
                         }

        />,
        document.getElementById('root'));
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();

