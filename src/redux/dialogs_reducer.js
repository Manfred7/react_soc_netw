const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogsData: [
        {id: 1, userName: "Dimych"},
        {id: 2, userName: "Andrey"},
        {id: 3, userName: "Sveta"},
        {id: 4, userName: "Sasha"},
        {id: 5, userName: "Victor"},
        {id: 6, userName: "Valera"},
    ],
    curMessageId: 5,
    newMessageText: "",
    messagesData: [
        {id: 1, txt: "Hi!"},
        {id: 2, txt: "Andrey"},
        {id: 3, txt: "Fine"},
        {id: 4, txt: "Me too!"},
        {id: 5, txt: "Yeeees!"}
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

            return {
                ...state,
                newMessageText: action.newValue
            };
        }
        case ADD_MESSAGE: {

            let newMessId = state.curMessageId + 1;
            let newMessText = state.newMessageText;

            return {
                ...state,
                curMessageId: newMessId,
                messagesData: [...state.messagesData, {id: newMessId, txt: newMessText}],
                newMessageText: ""
            };
        }

        default:
            return state;
    }
};

export default dialogsReducer;
