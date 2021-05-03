import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogsData = [
    {id: "1", userName: "Dimych"},
    {id: "2", userName: "Andrey"},
    {id: "3", userName: "Sveta"},
    {id: "4", userName: "Sasha"},
    {id: "5", userName: "Victor"},
    {id: "6", userName: "Valera"},
];

let messagesData = [
    {id: "1", txt: "Hi!"},
    {id: "2", txt: "Andrey"},
    {id: "3", txt: "Fine"},
    {id: "4", txt: "Me too!"},
    {id: "5", txt: "Yeeees!"}
];

ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData}/>,
    document.getElementById('root'));


