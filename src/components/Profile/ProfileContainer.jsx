import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
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

let mapStateToProps = (state) => {
    return {
        user: state.profilePage.userData,
    };
};
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getUserProfile })(
    WithUrlDataContainerComponent
);
