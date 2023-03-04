import  Mainpage  from "@/components/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kshitij Dutt</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Mainpage />
    </>
  );
}
