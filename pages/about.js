import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <>
        <Head>
        <title>Trevon Costa | About</title>
        <meta name="keywords" content="Trevon Costa"/>
        </Head>
            <div>
                <h1 className={styles.title}>About</h1>
                <p className={styles.text}>My name is Trevon Costa, I'm a Software Development Student from Toronto, Canada with almost 3 years of learning.
                Seeking opportunities to work in the Software Development field to gain experience and skills to continue growing 
                professionally and personally. Accustomed to being well-organized and goal focused to complete projects on time. 
                Looking to learn and help make an impact with my work.</p>
                <Image src="/resume.png" width={1000} height={1400} alt="resume"/>
                <p className={styles.text}>"Anyone who has never made a mistake has never tried anything new." - Albert Einstein</p>
            </div>
        </>
    );
}
 
export default About;