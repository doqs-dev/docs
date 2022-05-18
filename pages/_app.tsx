import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout';
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
  return (
      <>
        <Head>
          <script async data-no-cookie data-token="W948WND3QU8F" src="https://cdn.splitbee.io/sb.js"></script>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
  );
}

export default MyApp
