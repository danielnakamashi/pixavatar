import { useState, useEffect } from 'react'
import { getAvatar } from 'pixavatar'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [username, setUsername] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')

  useEffect(() => {
    const blob = new Blob([getAvatar(username)], { type: 'image/svg+xml' })
    let url = URL.createObjectURL(blob)

    setAvatar(url)
  }, [username])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pixavatar</title>
        <meta name="description" content="Github like avatar generator based on text" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pixavatar</h1>

        <p className={styles.description}>
          <input
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
        </p>

        <p className={styles.description}>
          <img src={avatar} width="100" height="100" />
        </p>
      </main>
    </div>
  )
}
