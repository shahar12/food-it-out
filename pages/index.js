import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header><title>Home Page</title></header>
        <h1>food <b style={{color:'blue'}}>WebSite</b></h1>
        <p>food it out web site</p>
    </div>
  )
}
