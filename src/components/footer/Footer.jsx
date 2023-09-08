import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}> 
    
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src = '/food.png' alt='fungiBlog' width={50} height={50} className={styles.image}/>
          <h1 className={styles.logoText}>FungiBlog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ab tempora asperiores molestias in. Vel odio qui obcaecati quis, 
          consequuntur vitae. Eos totam, reprehenderit expedita ipsa unde 
          adipisci ut ab voluptatum.
        </p>
        <div className={styles.icons}>
        <Image src='/facebook.png' alt='fb' width={18} height={18} />
        <Image src='/instagram.png' alt='fb' width={18} height={18} />
        <Image src='/youtube.png' alt='fb' width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>Contact</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Travel</Link>
          <Link href='/'>Culture</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Whatever</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Linkedin</Link>
          <Link href='/'>Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
