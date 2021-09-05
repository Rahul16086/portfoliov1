import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*<Head>*/}
      {/*  /!* eslint-disable-next-line react/no-unescaped-entities *!/*/}
      {/*  <title>Rahul's Portfolio</title>*/}
      {/*  <meta name={"description"} content={"A simple portfolio"} />*/}
      {/*  <html lang={"en"} />*/}
      {/*</Head>*/}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
