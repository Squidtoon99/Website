import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <p>Testing testing 123...</p>
      </h2>
      <div>
        <p>Where should I get started?</p>
      </div>
    </Layout>
  );
}
