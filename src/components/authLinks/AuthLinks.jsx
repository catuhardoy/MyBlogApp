'use client'
import React from 'react'
import styles from "./authLinks.module.css"
import Link from "next/link"
import {useState} from 'react'

const AuthLinks = () => {

const [open, setOpen] = useState(false)
  //temporal, creo un estado para que me aparezca como logeado o no
  const status = "notauthenticated"
  return (
    <>
    {status === "notauthenticated" ? (
      <Link href='/login' className={styles.link}>Login</Link>
    ):(
      <>
      <Link href = '/write' className={styles.link}></Link>
      <span className={styles.link}>Logout</span>
      </>
    )}
     <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
     </div>
     {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
