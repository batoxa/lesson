import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../../redux/sidebar-reducer";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return <Navbar {...this.props} updateUserStatus={this.props.updateUserStatus} />;
    }
}

const mapStateToProps = (state) => {
    return {
        friendData: state.sideBar.friends,
    };
};

export default connect(mapStateToProps, { getFriends })(NavbarContainer);
