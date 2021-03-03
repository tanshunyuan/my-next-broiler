import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <link rel="manifest" href="/site.webmanifest" />
      <link href="/favicons/favicon.ico" rel="icon" />
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png"></link>
      <meta name="theme-color" content="#000000" />
    </Head>
  );
};

export default Header;
