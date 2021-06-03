import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { setUserProfile, getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import { Profile } from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params?.userId ?? this.props.user?.userId ?? this.props.autorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentWillUnmount() {
        this.props.setUserProfile();
    }

    render() {
        return <Profile {...this.props} updateUserStatus={this.props.updateUserStatus} />;
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.profilePage.userData,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
    };
};

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { setUserProfile, getUserProfile })(WithUrlDataContainerComponent);

const profileBox = compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

export { profileBox as ProfileContainer }