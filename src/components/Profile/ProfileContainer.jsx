import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.profilePage.userData,
    };
};

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { setUserProfile, getUserProfile })(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer);
