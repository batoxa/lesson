import React from "react";
import styles from "./Users.module.css";
import { UserItem } from "./UserItem/UserItem";
import { UserItemPreloader } from "./UserItemPreloader/UserItemPreloader";
import { Paginator } from "../common/Paginator/Paginator";

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
                <Paginator pageSize={pageSize}  totalUsersCount={totalUsersCount} activePage={activePage} setActivePage={setActivePage} />
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
