import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add preconnect links and font link here */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Roboto:ital,wght@0,300;0,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
