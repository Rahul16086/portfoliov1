import React from "react";
import Head from "next/head";
import HomePage from "../components/homePage/HomePage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rahul's Portfolio</title>
        <meta name={"description"} content={"A simple portfolio"} />
        <html lang={"en"} />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
