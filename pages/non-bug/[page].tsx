import Head from "next/head";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Sample - Non Bug</title>
      </Head>
      <h1>Non bug page</h1>
    </div>
  );
};

export const getStaticProps = () => {
  return { props: {} };
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { page: "test" },
      },
    ],
    fallback: "blocking",
  };
};

export default Page;
