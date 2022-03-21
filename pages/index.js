import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Trevon Costa | Home</title>
      <meta name="keywords" content="Trevon Costa"/>
    </Head>
    <div>
      <h1 className={styles.title}>Trevon Costa</h1>
      <p className={styles.text}>The main page is undergoing some changes and updates! Please use the navigation bar to view more information about myself!</p>
      <p className={styles.text}>A lot more to come!</p>
      
      
    </div>
    </>
  )
}
