import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className="app-wrapper-content">

                    <Route exact
                           path="/dialogs"
                           render={() => <Dialogs state={props.appState.messsagesPage}
                                                  addMessage ={props.addMessage}
                                                  updateNewMessageText={props.updateNewMessageText}
                           />
                           }
                    />
                    <Route path="/profile"
                           render={()=><Profile state={props.appState.profilePage}
                                                addPost = {props.addPost}
                                                updateNewPostText ={props.updateNewPostText}

                           />}
                    />
                    <Route path="/music" component={Music}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>


                    {/* <Profile/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
