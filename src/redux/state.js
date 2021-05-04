let store = {
    _state: {
        messsagesPage: {
            messagesData: [
                {id: "1", txt: "Hi!"},
                {id: "2", txt: "Andrey"},
                {id: "3", txt: "Fine"},
                {id: "4", txt: "Me too!"},
                {id: "5", txt: "Yeeees!"}
            ],
            newMessageText: "new message",
            dialogsData: [
                {id: "1", userName: "Dimych"},
                {id: "2", userName: "Andrey"},
                {id: "3", userName: "Sveta"},
                {id: "4", userName: "Sasha"},
                {id: "5", userName: "Victor"},
                {id: "6", userName: "Valera"},
            ]
        },
        profilePage: {
            postsData: [
                {id: 1, text: "post1", LikeCount: 777},
                {id: 2, text: "post2", LikeCount: 5}
            ],
            newPostText: "new post"
        },
        newsPage: {},
        musicPage: {},
        settingsPage: {},
        sidebar: {},

        curMessageId: 5,
        curPostId: 2
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed')

    },
    addPost() {
        debugger;
        this._state.curPostId = this._state.curPostId + 1;
        const likesCount = this._state.curPostId;
        const newPost = {
            id: this._state.curPostId,
            text: this._state.profilePage.newPostText,
            LikeCount: likesCount
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
    },
    updateNewPostText(newValue) {
        this._state.profilePage.newPostText = newValue;
        this._callSubscriber();
    },
    updateNewMessageText(newValue) {
        this._state.messsagesPage.newMessageText = newValue;
        this._callSubscriber();
    },
    addMessage() {
        this._state.curMessageId = this._state.curMessageId + 1;
        const newMessage = {id: this._state.curMessageId, txt: this._state.messsagesPage.newMessageText};
        this._state.messsagesPage.messagesData.push(newMessage);
        this._state.messsagesPage.newMessageText = "";
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


export default store;
window.store = store;
