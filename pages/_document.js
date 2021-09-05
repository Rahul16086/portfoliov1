import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <title>Rahul's Portfolio</title>
          <meta name={"description"} content={"A simple portfolio"} />
          <meta name={"viewport"} content={"initial-scale=1"} />
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
