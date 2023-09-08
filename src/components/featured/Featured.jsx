import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Holitas, catu por aca!</b> Discorver my fungi trip
        </h1>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src ='/mush3.jpg' alt='pic' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}> Title</h1>
            <p className={styles.postDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, 
              fuga quasi rem distinctio praesentium esse eius dolorum veritatis 
              culpa inventore nulla commodi odit, totam sapiente ipsam possimus. Libero, provident sequi?
            </p>
            <button className={styles.button}>Read more</button>
          </div>
        </div>
    </div>
  )
}

export default Featured
