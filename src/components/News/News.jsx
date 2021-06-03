import React from 'react';
import PreloaderWite from '../common/PreloaderWite/PreloaderWite';
import styles from './News.module.css';


const News = (props) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.head}> News</div>
         <PreloaderWite />
      </div>
   );
}

export {News};
