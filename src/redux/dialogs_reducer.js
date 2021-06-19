const ADD_MESSAGE = 'ADD-MESSAGE';

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

export const addMessageActionCreater = (messageText) => {

    return {
        type: ADD_MESSAGE,
        value:messageText
    }
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {

            let newMessId = state.curMessageId + 1;
            let newMessText = action.value;

            return {
                ...state,
                curMessageId: newMessId,
                messagesData: [...state.messagesData, {id: newMessId, txt: newMessText}]
            };
        }

        default:
            return state;
    }
};

export default dialogsReducer;
