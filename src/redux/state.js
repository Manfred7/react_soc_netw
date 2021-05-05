const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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

        if (action.type === ADD_POST) {
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
        } else {

            if (action.type === UPDATE_NEW_POST_TEXT) {
                this._state.profilePage.newPostText = action.newValue;
                this._callSubscriber();
            } else if (action.type === UPDATE_NEW_MESAGE_TEXT) {
                this._state.messsagesPage.newMessageText = action.newValue;
                this._callSubscriber();
            } else if (action.type === ADD_MESSAGE) {
                this._state.curMessageId = this._state.curMessageId + 1;
                const newMessage = {id: this._state.curMessageId, txt: this._state.messsagesPage.newMessageText};
                this._state.messsagesPage.messagesData.push(newMessage);
                this._state.messsagesPage.newMessageText = "";
                this._callSubscriber();
            }
        }
    }
}


export const addPostActionCreater = () => {
    
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreater = (value) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newValue: value
    }
}

export const addMessageActionCreater = () => {

    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreater = (value) => {

    return {
        type: UPDATE_NEW_MESAGE_TEXT,
        newValue: value
    }
}

export default store;
window.store = store;
