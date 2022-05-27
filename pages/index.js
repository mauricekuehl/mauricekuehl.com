import Head from "next/head";
import Link from "next/link";
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
        <h1 className={styles.h1}>
          Hi, I&apos;am{" "}
          <span className={styles.personalName}>Maurice Kuehl</span>
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iru
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
        <hr className={styles.hr} />
        <h2 className={styles.h2}>Follow me on:</h2>
        <ul className={styles.list}>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.mauricekuehl.com"
              className={styles.link}
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.mauricekuehl.com"
              className={styles.link}
            >
              Github
            </a>
          </li>
        </ul>
        <h2 className={styles.h2}>View my work and future plans:</h2>
        <ul className={styles.list}>
          <li>
            <Link target="_blank" rel="noreferrer" href="/blog">
              <a className={styles.link}>Blog</a>
            </Link>
          </li>
          <li>
            <Link target="_blank" rel="noreferrer" href="/blog/projects">
              <a className={styles.link}>Projects</a>
            </Link>
          </li>
        </ul>
        <CookieBanner />
      </main>
      <footer className={styles.footer}>
        If you want to contact me do it via{" "}
        <a
          target="_blank"
          href="https://linkedin.mauricekuehl.com"
          className={styles.footerLink}
          rel="noreferrer"
        >
          Linkedin
        </a>
      </footer>
    </div>
  );
}
