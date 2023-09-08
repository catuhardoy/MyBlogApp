import React from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';


const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <Link href = {`/blog`}
        className={`${styles.category} ${styles.style}`}
        >
        <Image 
        src ='/mush1.jpg'
        alt=''
        width={32}
        height={32}
        className={styles.image}/>
        style
        </Link>

        <Link href = {`blog`}
        className={`${styles.category} ${styles.fashion}`}
        >
        <Image 
        src ='/mush2.jpg'
        alt=''
        width={32}
        height={32}
        className={styles.image}/>
        fashion
        </Link>

        <Link href = {`blog`}
        className={`${styles.category} ${styles.food}`}
        >
        <Image 
        src ='/mush3.jpg'
        alt=''
        width={32}
        height={32}
        className={styles.image}/>
        Food
        </Link>

        <Link href = {`blog`}
        className={`${styles.category} ${styles.travel}`}
        >
        <Image 
        src ='/mush3.jpg'
        alt=''
        width={32}
        height={32}
        className={styles.image}/>
        travel
        </Link>

        <Link href = {`blog`}
        className={`${styles.category} ${styles.culture}`}
        >
        <Image 
        src ='/mush3.jpg'
        alt=''
        width={32}
        height={32}
        className={styles.image}/>
       culture
        </Link>

        <Link href = {`blog`}
        className={`${styles.category} ${styles.coding}`}
        >
        <Image 
        src ='/mush3.jpg'
        alt=''
        width={32}
        height={32}
        className={styles.image}/>
       coding
        </Link>

      </div>
    </div>
  )
}

export default CategoryList
