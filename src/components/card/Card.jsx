import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
              <Image src='/mush3.jpg' alt='' fill className={styles.image}></Image>
          </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
              <Link href = "/">
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </h1>
              </Link>
              <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, 
                eius nisi, nam suscipit eveniet qui iure non, 
                incidunt temporibus repellat doloribus expedita sunt atque magnam? 
                Voluptate ratione asperiores officiis animi.
                </p>
                <Link href='/' className={styles.link}>Read More</Link>
            </div>
    </div>
  )
}

export default Card
