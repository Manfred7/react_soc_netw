import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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
                           render={() => <DialogsContainer store={props.store}


                           />
                           }
                    />
                    <Route path="/profile"
                           render={()=><Profile store={props.store}



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
