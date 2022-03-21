import Head from "next/head";
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <>
        <Head>
        <title>Trevon Costa | Contact</title>
        <meta name="keywords" content="Trevon Costa"/>
        </Head>
            <div>
                <h1 className={styles.title}>Contact</h1>
                <p className={styles.text}>I'm glad you've taken interest in contacting me! Please reach out to me using the following email address:.</p>
                <p className={styles.text}>Trevon.Costa@georgebrown.ca</p>
            </div>
        </>
    );
}
 
export default About;