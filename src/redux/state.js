import {RerenderEntireTree} from "../render";

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
    {id: 1, text: "post1", LikeCount: 777},
    {id: 2, text: "post2", LikeCount: 5}

];

let curPostId = 2;


let state = {
    messsagesPage: {
        messagesData,
        dialogsData
    },
    profilePage: {
        postsData
    },
    newsPage: {},
    musicPage: {},
    settingsPage: {},
    sidebar: {}
}

export let addPost = (postText) => {
    curPostId = curPostId + 1;
    const likesCount =curPostId;
    const newPost = {
        id: curPostId,
        text: postText,
        LikeCount: likesCount
    };
    state.profilePage.postsData.push(newPost);
    RerenderEntireTree(state);
}

export default state;
