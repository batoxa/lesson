import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { logoutUser } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

const headerBox = connect(mapStateToProps, {
    logoutUser,
})(HeaderContainer);

export { headerBox as HeaderContainer }
