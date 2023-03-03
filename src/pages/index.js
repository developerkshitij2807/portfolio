import Head from "next/head";
import Herocomponent from "src/components/Hero";

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
      <Herocomponent />
    </>
  );
}
