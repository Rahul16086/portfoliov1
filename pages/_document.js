// eslint-disable-next-line @next/next/no-head-import-in-document
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line react/no-unescaped-entities,@next/next/no-title-in-document-head */}
          <title>Rahul's Portfolio</title>
          <meta name={"description"} content={"A simple portfolio"} />
          <meta name={"viewport"} content={"initial-scale=1"} />
          <meta
            name="google-site-verification"
            content="4tA71Yq5YjpTCiFTerxcl8LQO1Q4OJxZ2idGSbB0Nuc"
          />
          <html lang={"en"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
