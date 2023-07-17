import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <h1>
      <Link href="/posts/first-post"> See First Post</Link>
    </h1>
    </div>
      )
}