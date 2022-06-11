import Head from "next/head";
import Link from "next/link";
import CookieBanner from "../components/cookieBanner";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maurice Kuehl</title>
        <meta
          name="description"
          content="I'm 16 years old and will graduate in 2023, besides I do mainly
          web development. My ambitions and goals are extremely high, why I try
          to absorb as much knowledge as physically possible without losing a
          decent balance."
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}>
          Hi, I&apos;m <span className={styles.personalName}>Maurice Kühl</span>
        </h1>
        <p className={styles.description}>
          I&apos;m{" "}
          {Math.floor(
            (new Date().getTime() - new Date("2005-07-18").getTime()) /
              (1000 * 60 * 60 * 24 * 365.25)
          )}{" "}
          years old and will graduate in 2023, besides I do mainly web
          development. My ambitions and goals are extremely high, why I try to
          absorb as much knowledge as physically possible without losing a
          decent balance.
        </p>
        <p className={styles.description}>
          My interests are in fields of fullstack developments with
          React.js/Node.js, web hacking, Linux, volleyball and cryptocurrencies,
          business and actually building useful applications.
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
