import { connect } from "react-redux";
import { setActivePage, getNextPage, getPrevPage, getPageUsers, unfollow, follow } from "../../redux/users-reducer";
import { getUsers, getPageSize, getTotalUsersCount, getActivePage, getIsLoading, getIsFollow } from "../../redux/users-selectors";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        activePage: getActivePage(state),
        isLoading: getIsLoading(state),
        isFollow: getIsFollow(state),

        // users: state.usersPage.users,
        // pageSize: state.usersPage.pageSize,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // activePage: state.usersPage.activePage,
        // isLoading: state.usersPage.isLoading,
        // isFollow: state.usersPage.isFollow,
    };
};

const UsersContainer = connect(mapStateToProps, {
    getPrevPage,
    getNextPage,
    setActivePage,
    getPageUsers,
    unfollow,
    follow,
})(Users);

export default UsersContainer;
