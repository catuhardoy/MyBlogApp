import React from 'react';
import styles from './navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  return (
    <div className={styles.container}>
       <div className={styles.social}>
        <Image src='/mush5.jpeg' alt= "fb" width={34} height={34} />
        <Image src='/mush9.png' alt= "ig" width={34} height={34} />
        <Image src='/mush10.png' alt= "tt" width={34} height={34} />
        <Image src='/mush11.png' alt= "yt" width={34} height={34} />
        <Image src='/mush5.jpeg' alt= "fb" width={34} height={34} />
        <Image src='/mush9.png' alt= "ig" width={34} height={34} />
        <Image src='/mush10.png' alt= "tt" width={34} height={34} />
        <Image src='/mush11.png' alt= "yt" width={34} height={34} />
      </div> 

      <div className={styles.logo}>fungyblog</div>
      <div className={styles.social}>
        <Image src='/mush5.jpeg' alt= "fb" width={34} height={34} />
        <Image src='/mush9.png' alt= "ig" width={34} height={34} />
        <Image src='/mush10.png' alt= "tt" width={34} height={34} />
        <Image src='/mush11.png' alt= "yt" width={34} height={34} />
        <Image src='/mush5.jpeg' alt= "fb" width={34} height={34} />
        </div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href='/' className={styles.link}>Homepage</Link>
        <Link href='/' className={styles.link}>Contact</Link>
        <Link href='/' className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
      
    </div>
  )
}

export default Navbar
