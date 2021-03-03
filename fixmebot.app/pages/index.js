import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const data = {
    "client_id" : "Iv1.45450527f32dda59",
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to FixMe Bot!
        </h1>

        <p className={styles.description}>
          Get started by authenticating your self as an admin!
        </p>
        <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${data.client_id}`}>Click here</a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
