import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import UserItem from './UserItem/UserItem';
import UserItemPreloader from './UserItemPreloader/UserItemPreloader';

class Users extends React.Component {

   componentDidMount() {
      this.props.isFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`, {
         withCredentials: true
      })
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
            this.props.isFetching(false);
         })
   }

   componentDidUpdate(prevProps) {
      if (this.props.activePage !== prevProps.activePage) {
         this.props.isFetching(true);
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`, {
            withCredentials: true
         })
            .then(response => {
               this.props.setUsers(response.data.items)
               this.props.isFetching(false);
            })
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
      const preloadView = [];
      for (let i = 1; i <= this.props.pageSize; i++) {
         preloadView.push(<UserItemPreloader key={i}/>);
      };
      return <div className={styles.wrapper}>
         <div className={styles.head}>Users list: </div>
         {this.props.isLoading
            ? <div className={styles.preloader}>{preloadView}</div>
            : this.props.users.map(user => <UserItem key={user.id} user={user} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} />)}
         <div className={styles.pagesList}>Page:
            {pages.map(pageNumber => {
            if (this.props.activePage === pageNumber) {
               return <span key={pageNumber} className={styles.selected} onClick={() => { this.props.setActivePage(pageNumber) }}>{pageNumber}</span>
            }
            return < span key={pageNumber} onClick={() => { this.props.setActivePage(pageNumber) }}>{pageNumber}</span>
         })}
         </div>
         <button className={styles.prevPageButton} onClick={() => { this.props.getPrevPage() }}>Previous Page</button>
         <button className={styles.nextPageButton} onClick={() => { this.props.getNextPage() }}>Next Page</button>
      </div >
   }
}
export default Users;