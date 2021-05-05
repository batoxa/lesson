import { connect } from "react-redux";
import { setActivePage, getNextPage, getPrevPage, getUsers, unfollow, follow } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
        isLoading: state.usersPage.isLoading,
        isFollow: state.usersPage.isFollow,
    };
};

const UsersContainer = connect(mapStateToProps, {
    getPrevPage,
    getNextPage,
    setActivePage,
    getUsers,
    unfollow,
    follow,
})(Users);

export default UsersContainer;
