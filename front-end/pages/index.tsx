import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import exp from 'constants'
import Header from '@/components/Header'


const Home: React.FC = () => {

return (
    <>
        <Head>
            <title>Blogs</title>
            <meta name='description' content="Blog app" />
            <meta name="vieuwport" content='width=device-width, initial-scale=1' />

        </Head>

        <Header></Header>

        <main className={styles.main}>
          <span>
            <h1>Welcome!</h1>
          </span>

          <div className={styles.description}>
            <p>
            This is an online platform where you can share your blogs and see others' blogs.
            </p>
          </div>
        </main>


    </>
  )
}

export default Home;


