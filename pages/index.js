import Head from "next/head";
import CookieBanner from "../components/cookieBanner";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maurice Kuehl</title>
        <meta name="description" content="Maurice Kuehl personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CookieBanner />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
