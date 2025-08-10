import HomeBody from "@/componenets/articleBody/HomeBody";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Job Platform - ALX</title>
        <link rel="icon" href="/assets/icons/Icon+bg.svg" />
      </Head>
      <div>
        <HomeBody />

      </div>
    </>

  );
}
