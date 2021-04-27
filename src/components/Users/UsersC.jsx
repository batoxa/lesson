import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

   componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      return <div className={styles.wrapper}>
         <div className={styles.head}>Users list:</div>
         {this.props.users.map(user =>
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
         }
      </div>
   }
}
export default Users;