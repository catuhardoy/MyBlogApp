import React from 'react';
import styles from './pagination.module.css'

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>PREVIOUS</button>
      <button className={styles.button}>NEXT</button>
    
    </div>
  )
}

export default Pagination