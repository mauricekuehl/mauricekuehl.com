import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/Blog.module.scss";

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content="Maurice Kuehl personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className={styles.article}>
        <h1 className={styles.heading}>{postData.title}</h1>
        <div>{new Date(postData.date).toDateString()} </div>
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
