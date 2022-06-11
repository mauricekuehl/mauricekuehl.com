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
      </Head>
      <main className={styles.main}>
        <section>
          {" "}
          <h1 className={styles.heading}>Maurice Kuehl&apos;s Blog</h1>
          <p className={styles.blogDescription}>
            I will post here regularly things that inspire and influence me.
            Additionally I will document my journey.
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
