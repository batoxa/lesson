import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import UserItem from './UserItem/UserItem';

class Users extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
         })
   }

   componentDidUpdate(prevProps) {
      if (this.props.activePage !== prevProps.activePage) {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`)
            .then(response => {
               this.props.setUsers(response.data.items)
            })
      }
   }

   // onPageChanged = (pageNumber) => {
   //    this.props.setActivePage(pageNumber);
   //    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
   //       .then(response => {
   //          this.props.setUsers(response.data.items)
   //       })
   // }

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
         <div className={styles.head}>Users list:</div>
         {this.props.users.map(user => <UserItem user={user} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} />)}
         <div className={styles.pagesList}>Page:
            {pages.map(pageNumber => { return < span className={this.props.activePage === pageNumber && styles.selected} onClick={() => { this.props.setActivePage(pageNumber) }}>{pageNumber}</span> })}
            {/* {pages.map(pageNumber => { return < span className={this.props.activePage === pageNumber && styles.selected} onClick={() => { this.onPageChanged(pageNumber) }}>{pageNumber}</span> })} */}
         </div>
         <button className={styles.prevPageButton} onClick={() => { this.props.getPrevPage() }}>Previous Page</button>
         <button className={styles.nextPageButton} onClick={() => { this.props.getNextPage() }}>Next Page</button>
      </div >
   }
}
export default Users;