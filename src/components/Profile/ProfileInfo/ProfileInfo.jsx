import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
      <div>
         <img src="https://fartuk.ru/upload/resize_cache/iblock/55b/1920_383_1d2c0be91f8b91a0d3c91a9448f348e3c/skinali_vodoemy_plyazh_215280.jpg" width="100%" alt='bunner' />
         <div className={styles.head}>ava+discr</div>
      </div>
   );
}

export default ProfileInfo;
