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
      <section>
        {" "}
        <h1>Maurice Kuehl&apos;s Blog</h1>
        <p>i am .. and i right about ... ?</p>
      </section>
      <section>
        {allPostsData.map(({ id, date, title }) => (
          <li className={styles.listItem} key={id}>
            <Link href={`/blog/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={styles.lightText}>
              {new Date(date).toDateString()}
            </small>
          </li>
        ))}
      </section>
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
