import Head from "next/head";
import styles from './layout.module.css'

// @ts-ignore
export default function Layout({children}) {
  return (
      <>
        <Head>
          <title>Documentation - doqs.dev</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className="flex divide-x-2">
          <aside className="flex-none sticky top-0 overflow-y-auto px-5 h-screen border-slate-100">

            <div id="sidebar-header" className="my-3">
              <img src="/logo.svg" width={20} alt="Logo" className={"inline-block"}/>
              <span className={"inline-block pl-2 text-sm"}>doqs</span>
            </div>

            <ul className={"text-sm"}>
              <li className={styles.li}>
                <a href="/">Introduction</a>
              </li>
              <li className={"uppercase text-gray-500 text-sm my-3"}>API Reference</li>
              <li className={styles.li}><a href="/api-reference/authentication">Authentication</a></li>
              <li className={styles.li}><a href="/api-reference/create-template">Create Template</a></li>
            </ul>

          </aside>
          <div className={"flex-1 divide-y-2"}>
            <main className="ml-8 py-8 mr-8" style={{minHeight: "92vh"}}>
              {children}
            </main>
            <footer>
              <div className={"ml-8 mt-5"}>
                Footer
              </div>
            </footer>
          </div>
        </div>
      </>
  )
}