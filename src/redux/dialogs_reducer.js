const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
const dialogsReducer = (state, action) => {
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
