export const getUsers = (state) => {
    return state.usersPage.users;
}

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