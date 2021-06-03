import React from "react";
import styles from "./Users.module.css";
import classNames from "classnames";
import { UserItem } from "./UserItem/UserItem";
import { UserItemPreloader } from "./UserItemPreloader/UserItemPreloader";

class Users extends React.Component {
    componentDidMount() {
        this.props.getPageUsers(this.props.activePage, this.props.pageSize);
    }

    componentDidUpdate(prevProps) {
        if (this.props.activePage !== prevProps.activePage) {
            this.props.getPageUsers(this.props.activePage, this.props.pageSize);
        }
    }

    render() {
        const {
            users,
            pageSize,
            totalUsersCount,
            activePage,
            isLoading,
            isFollow,
            getPrevPage,
            getNextPage,
            setActivePage,
            unfollow,
            follow,
        } = this.props;

        const pages = [];
        if (activePage < 9) {
            for (let i = 1; i <= 16; i++) {
                pages.push(i);
            }
        } else {
            for (let i = activePage - 8; i <= activePage + 8; i++) {
                if (i <= Math.ceil(totalUsersCount / pageSize)) {
                    pages.push(i);
                }
            }
        }
        return (
            <div className={styles.wrapper}>
                <div className={styles.head}>Users list: </div>
                {isLoading ? (
                    <div className={styles.preloader}>
                        {Array.from({ length: pageSize }).map((_, index) => (
                            <UserItemPreloader key={index} />
                        ))}
                    </div>
                ) : (
                    users.map((user) => (
                        <UserItem key={user.id} user={user} follow={follow} unfollow={unfollow} isFollow={isFollow} />
                    ))
                )}
                <div className={styles.pagesList}>
                    Page:
                    {pages.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={classNames(styles.pageNumberButton, {
                            [styles.selected]: activePage === pageNumber,
                        })}
                        onClick={() => {
                            setActivePage(pageNumber);
                        }}
                    >
                        {pageNumber}
                    </button>
                ))}
                </div>
                <button className={styles.prevPageButton} onClick={getPrevPage}>
                    Previous
                </button>
                <button className={styles.nextPageButton} onClick={getNextPage}>
                    Next
                </button>
            </div>
        );
    }
}
export { Users };
