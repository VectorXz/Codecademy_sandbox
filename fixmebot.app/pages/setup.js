import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'

function Home(props) {
  console.log("Got props")
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! {props.login}, Let's setup bot!
        </h1>

        <p className={styles.description}>
          Please configure below settings {props.code}
        </p>
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

const fetchData = async (code) => {
    const access_token = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: "Iv1.45450527f32dda59",
        client_secret: "25b6c1020dd6a6b31071fc96c0f71fe7f05374f2",
        code: code
    }).then((resp) => {
        let params = new URLSearchParams(resp.data);
        const token = params.get("access_token");
        return token
    }).catch((err) => {
        console.log(err)
    })

    const data = await axios.get('https://api.github.com/user', {
        headers: {
            Authorization: `token ${access_token}`,
        }
    }).then((resp) => {
        //console.log(resp2)
        console.log("return data!")
        return resp.data
    }).catch((err) => {
        console.log("Error! return null")
        console.log(err)
        return {}
    })

    return data
}

export async function getServerSideProps(context) {
    //console.log(context.query)
    //when installation completed url will be like
    //http://localhost:3000/setup?code=55ef8ff135025dc40e2d&installation_id=15072974&setup_action=install
    const data = await fetchData(context.query["code"])
    console.log("Fetched Data")
    console.log(data)

    return {
        props: data
    }
  }
  
export default Home