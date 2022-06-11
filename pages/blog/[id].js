import Head from "next/head";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/Blog.module.scss";

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:site_name" content="Maurice Kuehl's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className={styles.article}>
        <h1 className={styles.heading}>{postData.title}</h1>
        <div>
          <span>{new Date(postData.date).toDateString()}</span>
          <span className={styles.linkHome}>
            <Link href="/blog">
              <a>Home</a>
            </Link>
          </span>
        </div>
        {/*  eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
