import Head from "next/head";

// @ts-ignore
export default function Layout({children}) {
  return (
      <>
        <Head>
          <title>Documentation - doqs.dev</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div>Side</div>
        <main>
          {children}
        </main>
        <footer>Footer</footer>
      </>
  )
}