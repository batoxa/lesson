import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData, authenticationUser } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authenticationUser();
    }

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

export default connect(mapStateToProps, {
    setAuthUserData,
    authenticationUser,
})(HeaderContainer);
