import React from 'react';
import styles from './Users.module.css';
import UserItem from './UserItem/UserItem';
import UserItemPreloader from './UserItemPreloader/UserItemPreloader';
import classNames from 'classnames';

class Users extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.activePage, this.props.pageSize)
   }

   componentDidUpdate(prevProps) {
      if (this.props.activePage !== prevProps.activePage) {
         this.props.getUsers(this.props.activePage, this.props.pageSize)
      }
   }

   render() {
      const pages = [];
      if (this.props.activePage < 9) {
         for (let i = 1; i <= 16; i++) {
            pages.push(i);
         }
      } else {
         for (let i = this.props.activePage - 8; i <= this.props.activePage + 8; i++) {
            if (i <= (Math.ceil(this.props.totalUsersCount / this.props.pageSize))) {
               pages.push(i)
            };
         }
      }
      return <div className={styles.wrapper}>
         <div className={styles.head}>Users list: </div>
         {this.props.isLoading
            ? <div className={styles.preloader}>
               {Array.from({ length: this.props.pageSize })
                  .map((_, index) => <UserItemPreloader key={index} />)}
            </div>
            : this.props.users.map(user =>
               <UserItem
                  key={user.id}
                  user={user}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  isFollow={this.props.isFollow}
               />)}
         <div className={styles.pagesList}>Page:
            {pages.map(pageNumber => (
            <button
               key={pageNumber}
               className={classNames( [styles.pageNumberButton], {[styles.selected]: this.props.activePage === pageNumber })}
               onClick={() => { this.props.setActivePage(pageNumber) }}
            >{pageNumber}
            </button>
         )
         )}
         </div>
         <button className={styles.prevPageButton} onClick={this.props.getPrevPage}>Previous Page</button>
         <button className={styles.nextPageButton} onClick={this.props.getNextPage}>Next Page</button>
      </div >
   }
}
export default Users;