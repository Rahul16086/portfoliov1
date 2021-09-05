import React from "react";
import HomePage from "../components/homePage/HomePage";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <meta name={"description"} content={"A simple portfolio"} />
        <meta name={"viewport"} content={"initial-scale=1"} />
        <html lang={"en"} />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Rahul's Portfolio</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
