let rerenderEntireTree = () => {
    console.log('state is changed')

}

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

let curMessageId = 5;

let postsData = [
    {id: 1, text: "post1", LikeCount: 777},
    {id: 2, text: "post2", LikeCount: 5}
];

let curPostId = 2;

let state = {
    messsagesPage: {
        messagesData,
        newMessageText: "new message",
        dialogsData
    },
    profilePage: {
        postsData,
        newPostText: "new post"
    },
    newsPage: {},
    musicPage: {},
    settingsPage: {},
    sidebar: {}
}

export let updateNewPostText = (newValue) => {
    state.profilePage.newPostText = newValue;
    rerenderEntireTree();
}

export let addPost = () => {
    curPostId = curPostId + 1;
    const likesCount = curPostId;
    const newPost = {
        id: curPostId,
        text: state.profilePage.newPostText,
        LikeCount: likesCount
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree();
}

export let updateNewMessageText = (newValue) => {
    state.messsagesPage.newMessageText = newValue;
    rerenderEntireTree();
}

export let addMessage = () => {
    curMessageId = curMessageId + 1;
    const newMessage = {id: curMessageId, txt: state.messsagesPage.newMessageText};
    state.messsagesPage.messagesData.push(newMessage);
    state.messsagesPage.newMessageText = "";
    rerenderEntireTree();
}

export const setRerenderProc = (proc) => {
    rerenderEntireTree = proc;
}
export default state;
