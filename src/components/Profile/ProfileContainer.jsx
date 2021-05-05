import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { setUserProfile, getUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
    }

    componentWillUnmount() {
        this.props.setUserProfile();
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />;
        return <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.profilePage.userData,
        isAuth: state.auth.isAuth,
    };
};
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getUserProfile })(WithUrlDataContainerComponent);
