import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getActivePage = (state) => {
    return state.usersPage.activePage;
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading;
}

export const getIsFollow = (state) => {
    return state.usersPage.isFollow;
}