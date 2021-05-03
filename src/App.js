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
    debugger;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className="app-wrapper-content">

                    <Route exact
                           path="/dialogs"
                           render={() => <Dialogs dialogsData={props.dialogsData}
                                                  messagesData={props.messagesData}/>
                           }
                    />
                    <Route path="/profile"
                           render={()=><Profile postsData={props.postsData}  />}
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
