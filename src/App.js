import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">

                <img
                    src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"

                />

            </header>

            <nav className="nav">
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://cdn.shazoo.ru/c800x360/161743_5LpKjDRLyv_4790632_samurai_jack_2422x1500_w.jpg"/>
                </div>

                <div>ava+description</div>
                <div>mypost
                    <div> new post</div>
                </div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                    <div>post4</div>

                </div>

            </div>
        </div>
    );
}

export default App;
