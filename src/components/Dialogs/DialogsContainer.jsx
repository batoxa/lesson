import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreater } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreater(newMessageText));
        },
    };
};

// const AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
