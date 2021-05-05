import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";


let store = {
    _state: {
        messsagesPage: {
            dialogsData: [
                {id: "1", userName: "Dimych"},
                {id: "2", userName: "Andrey"},
                {id: "3", userName: "Sveta"},
                {id: "4", userName: "Sasha"},
                {id: "5", userName: "Victor"},
                {id: "6", userName: "Valera"},
            ],
            curMessageId: 5,
            newMessageText: "",
            messagesData: [
                {id: "1", txt: "Hi!"},
                {id: "2", txt: "Andrey"},
                {id: "3", txt: "Fine"},
                {id: "4", txt: "Me too!"},
                {id: "5", txt: "Yeeees!"}
            ],
        },
        profilePage: {
            curPostId: 2,
            newPostText: "",
            postsData: [
                {id: 1, text: "post1", LikeCount: 777},
                {id: 2, text: "post2", LikeCount: 5}
            ]
        },
        newsPage: {},
        musicPage: {},
        settingsPage: {},
        sidebar: {}

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed')

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        dialogsReducer(this._state.messsagesPage, action)
        profileReducer(this._state.profilePage,action);
        this._callSubscriber();
    }
}





export default store;
window.store = store;
