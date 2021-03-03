import "../styles/tailwind/base.css";
import "../styles/tailwind/utilities.css";
import "../styles/tailwind/components.css";
import "../styles/globals.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
