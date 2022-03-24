import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import styles from '../../styles/Home.module.css'

const Projects = () => {
  return (
    <>
    <Head>
      <title>Trevon Costa | Projects</title>
      <meta name="keywords" content="Trevon Costa"/>
    </Head>
    <div>
      <h1 className={styles.title}>Projects</h1>

      <p className={styles.text}>.</p>
      <Link href="/projects/project1"><a className={styles.btn}>Project 1</a></Link>

      <p className={styles.text}>.</p>
      <Link href="/projects/project2"><a className={styles.btn}>Project 2</a></Link>

      <p className={styles.text}>.</p>
      <Link href="/projects/project3"><a className={styles.btn}>Project 3</a></Link>

      <p className={styles.text}>.</p>
      <Link href="/projects/project4"><a className={styles.btn}>Project 4</a></Link>
      
    </div>
    </>
  )
}
export default Projects;