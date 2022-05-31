import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Blog.module.scss";
import { getSortedPostsData } from "../lib/posts";

export default function Blog({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maurice Kuehl&apos;s Blog</title>
        <meta name="description" content="Maurice Kuehl personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section>
          {" "}
          <h1 className={styles.heading}>Maurice Kuehl&apos;s Blog</h1>
          <p className={styles.blogDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute iru
          </p>
        </section>
        <section>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <a className={styles.listHeading}>{title}</a>
              </Link>
              <br />
              <small className={styles.lightText}>
                {new Date(date).toDateString()}
              </small>
            </li>
          ))}
        </section>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
