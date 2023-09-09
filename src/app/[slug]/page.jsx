import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src='/post2.jpg' alt='' fill className={styles.avatar}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Julia saba </span>
              <span className={styles.date}>01.02.23</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/post1.jpg' alt='' fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <h5 className={styles.postTitle}>lorem ipsum cosita</h5>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam harum beatae blanditiis dolor vero tenetur l
            audantium esse, iste temporibus, totam amet? Cupiditate 
            deserunt et, sed porro sint est ut temporibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam harum beatae blanditiis dolor vero tenetur l
            audantium esse, iste temporibus, totam amet? Cupiditate 
            deserunt et, sed porro sint est ut temporibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam harum beatae blanditiis dolor vero tenetur l
            audantium esse, iste temporibus, totam amet? Cupiditate 
            deserunt et, sed porro sint est ut temporibus?
            </p>
            <h5 className={styles.postTitle}>lorem ipsum cosita</h5>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam harum beatae blanditiis dolor vero tenetur l
            audantium esse, iste temporibus, totam amet? Cupiditate 
            deserunt et, sed porro sint est ut temporibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam harum beatae blanditiis dolor vero tenetur l
            audantium esse, iste temporibus, totam amet? Cupiditate 
            deserunt et, sed porro sint est ut temporibus?
            </p>
          </div>
        </div>
        <Menu/>
      </div>
      </div>
   
  )
}
 
export default SinglePage
