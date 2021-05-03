import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";


export let RerenderEntireTree = (state ) => {
    ReactDOM.render(<App appState={state} addPost={addPost}/>,
        document.getElementById('root'));
}
