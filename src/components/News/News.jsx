import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import styles from './News.module.css';


const News = (props) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.head}> News</div>
         <Preloader />
      </div>
   );
}

export default News;
