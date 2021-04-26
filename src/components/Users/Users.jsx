import React from 'react';
// import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';

const Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1, fullName: "Wise", avatar: "https://2.bp.blogspot.com/-P1KHVukRJpE/V8Tz6r0eZ8I/AAAAAAACFW0/I0r732kp2wgPSqXBFl0i_DkCndzrY5rLACLcB/s320/Wise.png",
            location: { city: "Moscow", country: "Russia" },
            status: "Pro",
            followed: true
         },
         {
            id: 2, fullName: "Total", avatar: "https://media.istockphoto.com/vectors/cow-icon-vector-id652692584",
            location: { city: "Klimovsk", country: "Russia" },
            status: "Junior",
            followed: true
         },
         {
            id: 3, fullName: "ZloySky", avatar: "https://yt3.ggpht.com/ytc/AAUvwnjN-7ImWo3a5BUbV-LRQrYFGTjHG_vctOYz4NCf=s900-c-k-c0x00ffffff-no-rj",
            location: { city: "Saratov", country: "Russia" },
            status: "Jude",
            followed: false
         },
         {
            id: 4, fullName: "Skawolf", avatar: "https://yt3.ggpht.com/a/AATXAJxdL0vOU2JGwmuP9TlOhXlCf8Pm9LHVk18YE1Xo=s900-c-k-c0x00ffffff-no-rj",
            location: { city: "Ryazan", country: "Russia" },
            status: "Newbee",
            followed: false
         },
         {
            id: 5, fullName: "Tendo", avatar: "https://yt3.ggpht.com/ytc/AAUvwnhHlQn5yh79uOtvDHMJmYXZ3sXnqycPw4SHFMRB=s900-c-k-c0x00ffffff-no-rj",
            location: { city: "Komunarka", country: "Russia" },
            status: "Middle",
            followed: false
         }
      ]
      )
   }

   // followUser = (userId) => () => props.followUser(userId)

   const userElements = props.users.map(user =>
      <div className={styles.itemwrapper}>
         <div className={styles.avatar}>
            <img src={user.avatar} alt='avatar' />
         </div>
         <div className={styles.description}>
            <div className={styles.fullname}>
               {user.fullName}
            </div>
            <div className={styles.status}>
               {user.status}
            </div>
            <div className={styles.location}>
               {user.location.city}, {user.location.country}
            </div>
         </div>
         <div className={styles.follow}>
            {user.followed
               ? <button onClick={() => props.unfollowUser(user.id)}>
                  <i className="fa fa-star" aria-hidden="true" />
               </button>

               : <button onClick={() => props.followUser(user.id)}>
                  <i className="fa fa-star-o" aria-hidden="true" />
               </button>}
         </div>
      </div>

      // <UserItem user={user} />
   )

   return (
      <div className={styles.wrapper}>
         <div className={styles.head}>Users list:</div>
         {userElements}
      </div>
   );
}

export default Users;