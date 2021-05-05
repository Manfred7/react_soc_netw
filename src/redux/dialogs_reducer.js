const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
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
    ]
};

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
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  UPDATE_NEW_MESAGE_TEXT: {
            state.newMessageText = action.newValue;

            return state;
        }

        case ADD_MESSAGE: {
            state.curMessageId = state.curMessageId + 1;
            const newMessage = {id: state.curMessageId, txt: state.newMessageText};
            state.messagesData.push(newMessage);
            state.newMessageText = "";

            return state;
        }
        default:
            return state;
    }
};

export default dialogsReducer;
