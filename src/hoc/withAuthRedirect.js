import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,

})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"} />;
            return <Component {...this.props} />;
        }
    }
    const ConnecedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnecedRedirectComponent;
};





// export const withAuthRedirect = (Component) => {
//     if (!Component.props.isAuth) return <Redirect to={"/login"} />;
//     return <Component {...Component.props} />;
// };

