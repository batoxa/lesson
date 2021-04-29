import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
         })
   }

   onPageCanged = (pageNumber) => {
      this.props.setActivePage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      const pages = [];
      if (this.props.activePage < 11) {
         for (let i = 1; i <= 20; i++) {
            pages.push(i);
         }
      } else {
         for (let i = this.props.activePage - 10; i <= this.props.activePage + 10; i++) {
            pages.push(i);
         }
      }
      
      const UsersItem = this.props.users.map(user =>
         <div className={styles.itemwrapper} key={user.id}>
            <div className={styles.avatar}>
               <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='avatar' />
            </div>
            <div className={styles.description}>
               <div className={styles.fullname}>
                  {user.name}
               </div>
               <div className={styles.status}>
                  {user.status === null ? "user.status" : user.status}
               </div>
               <div className={styles.location}>
                  {"user.location.city"}, {"user.location.country"}
               </div>
            </div>
            <div className={styles.follow}>
               {user.followed
                  ? <button onClick={() => this.props.unfollowUser(user.id)}>
                     <i className="fa fa-star" aria-hidden="true" />
                  </button>
                  : <button onClick={() => this.props.followUser(user.id)}>
                     <i className="fa fa-star-o" aria-hidden="true" />
                  </button>}
            </div>
         </div>
      )

      return <div className={styles.wrapper}>
         <div className={styles.head}>Users list:</div>
         <div className={styles.pagesList}>Page:
            {pages.map(pageNumber => { return < span className={this.props.activePage === pageNumber && styles.selected} onClick={() => { this.onPageCanged(pageNumber) }}>{pageNumber}</span> })}
         </div>
         {UsersItem}
      </div >
   }
}
export default Users;