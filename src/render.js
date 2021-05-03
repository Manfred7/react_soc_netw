import ReactDOM from "react-dom";
import App from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";


export let RerenderEntireTree = (state ) => {
    ReactDOM.render(<App appState={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}
                         addMessage={addMessage}
                         updateNewMessageText={updateNewMessageText}

        />,
        document.getElementById('root'));
}
