import Dialogs from "./Dialogs";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    let messagesPage = state.messagesPage;
    return {
        dialogsData: messagesPage.dialogsData,
        messagesData: messagesPage.messagesData,
        newMessageText: messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            const action = addMessageActionCreater();
            dispatch(action);
        },
        onMessageChange: (text) => {
            const action = updateNewMessageTextActionCreater(text)
            dispatch(action);
        }
    }
}

//снизу вверх сначала WithAuthRedirect(Dialogs), затем то что получилось обрамляет  connect(mapStateToProps, mapDispatchToProps)(..то что получилось..)
// так можно забубенить любую вложенность
const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

export default DialogsContainer;
