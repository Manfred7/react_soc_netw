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

let postsData = [
    {id: "1", text: "post1!", LikeCount: "777"},
    {id: "2", text: "post2", LikeCount: "5"},
    {id: "3", text: "post3", LikeCount: "53"},
    {id: "4", text: "post4", LikeCount: "17"},
    {id: "5", text: "post5", LikeCount: "888"},
    {id: "6", text: "новый интересный пост", LikeCount: "900"}
];

ReactDOM.render(<App dialogsData={dialogsData}
                     messagesData={messagesData}
                     postsData={postsData}/>,
    document.getElementById('root'));


