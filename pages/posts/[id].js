import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { getAllPostIds, getPostData } from "../../lib/posts";
import dark from "../../syntaxTheme";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={dark} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown
          className="markdown-body"
          escapeHtml={false}
          source={postData.contentHTML}
          renderers={{ code: CodeBlock }}
        />
      </article>
    </Layout>
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
