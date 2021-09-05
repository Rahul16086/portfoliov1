import React from "react";
import Head from "next/head";
import HomePage from "../components/homePage/HomePage";

const Home = () => {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Rahul's Portfolio</title>
        <meta name={"description"} content={"A simple portfolio"} />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
