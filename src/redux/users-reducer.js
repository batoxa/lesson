import { userAPI } from "../components/api/api";
import { updateObjectInArray } from "../utils/object-helpers";
import { getFriends } from "./sidebar-reducer";

const SET_USERS = "users/SET-USERS";
const FOLLOW_USER = "users/FOLLOW-USER";
const UNFOLLOW_USER = "users/UNFOLLOW-USER";
const SET_ACTIVE_PAGE = "users/SET-ACTIVE-PAGE";
const SET_TOTAL_COUNT = "users/SET-TOTAL-COUNT";
const GET_NEXT_PAGE = "users/GET-NEXT-PAGE";
const GET_PREV_PAGE = "users/GET-PREV-PAGE";
const IS_FETCHING = "users/IS-FETCHING";
const TOGGLE_IS_FOLLOW = "users/TOGGLE-IS-FOLLOW";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    activePage: 1,
    // activePage: 2412,
    isLoading: false,
    isFollow: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FOLLOW:
            return {
                ...state,
                isFollow: action.isFollow ? [...state.isFollow, action.userId] : [...state.isFollow.filter((id) => id !== action.userId)],
            };

        case IS_FETCHING:
            return {
                ...state,
                isLoading: action.isLoading,
            };

        case GET_PREV_PAGE:
            if (state.activePage > 1) {
                return {
                    ...state,
                    activePage: state.activePage - 1,
                };
            }
            return {
                ...state,
            };

        case GET_NEXT_PAGE:
            if (
                state.activePage < Math.ceil(state.totalUsersCount / state.pageSize)
            ) {
                return {
                    ...state,
                    activePage: state.activePage + 1,
                };
            }
            return {
                ...state,
            };

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };

        case SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.pageNumber,
            };

        case FOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            };

        case UNFOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };

        default:
            return state;
    }
};

export const setUsersTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount,
});

export const setActivePage = (pageNumber) => ({
    type: SET_ACTIVE_PAGE,
    pageNumber,
});

export const setUsers = (users) => ({ type: SET_USERS, users });
export const followUser = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });
export const getNextPage = () => ({ type: GET_NEXT_PAGE });
export const getPrevPage = () => ({ type: GET_PREV_PAGE });
export const isFetching = (isLoading) => ({ type: IS_FETCHING, isLoading });

export const toggleIsFollow = (isFollow, userId) => ({
    type: TOGGLE_IS_FOLLOW,
    isFollow,
    userId,
});

export const getPageUsers = (activePage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetching(true));
        userAPI.getUsers(activePage, pageSize).then((data) => {
            dispatch(setUsers(data.items));
            dispatch(isFetching(false));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    };
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreater) => {
    dispatch(toggleIsFollow(true, userId));
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreater(userId));
        dispatch(getFriends());
    }
    dispatch(toggleIsFollow(false, userId));

}


export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.setUnfollow.bind(userId), unfollowUser)
    };
};

export const follow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.setFollow.bind(userId), followUser)
    };
};

export { usersReducer };