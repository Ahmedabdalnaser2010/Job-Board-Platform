import { Html, Head, Main, NextScript } from "next/document";




export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <link rel="icon" href="/assets/icons/Icon+bg.svg" />
      </Head>

      <body className="antialiased w-full ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
