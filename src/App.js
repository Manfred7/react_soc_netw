import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route exact
                           path="/dialogs"
                           render={() => <DialogsContainer  />
                           }
                    />
                    <Route path="/profile/:userId?" render={()=><ProfileContainer  />} />
                    <Route path="/music" component={Music}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>

                    <Route path="/login" component={Login}/>

                    <Route path="/users" render={()=><UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
