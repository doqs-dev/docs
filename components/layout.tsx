import Head from "next/head";
import styles from './layout.module.css'
import { Badge } from "./badge";

// @ts-ignore
export default function Layout({children}) {
  return (
      <>
        <Head>
          <title>Documentation - doqs.dev</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className="flex divide-x-2">
          <aside className="flex-none sticky top-0 overflow-y-auto pl-4 pr-12 h-screen border-slate-100">

            <div id="sidebar-header" className="my-3">
              <img src="/logo.svg" width={20} alt="Logo" className={"inline-block"}/>
              <span className={"inline-block pl-2 text-sm"}>doqs</span>
            </div>

            <ul className={"text-sm list-none"}>
              <li className={styles.li}>
                <a href="/">Introduction</a>
              </li>
              <li className={"uppercase text-gray-500 text-sm my-3"}>API Reference</li>
              <li className={styles.li}><a href="/api-reference/authentication">Authentication</a></li>
              <li className={styles.li}><a href="/api-reference/create-template">
                <small className="inline-block mr-0.5"><Badge type="success" size="sm">POST</Badge></small>
                Create template
              </a></li>
              <li className={styles.li}><a href="/api-reference/fill-template">
                <small className="inline-block mr-0.5"><Badge type="success" size="sm">POST</Badge></small>
                Fill template
              </a></li>

              <li className={"uppercase text-gray-500 text-sm my-3"}>Fields</li>
              <li className={styles.li}><a href="/fields/text">Text field</a></li>
              <li className={styles.li}><a href="/fields/checkbox">Checkbox field</a></li>
              <li className={styles.li}><a href="/fields/date">Date field</a></li>
            </ul>

          </aside>
          <div className={"flex-1 divide-y-2"}>
            <main className="ml-8 py-8 mr-8" style={{minHeight: "92vh"}}>
              {children}
            </main>
            <footer>
              <div className="ml-8 mt-5 text-gray-700 grid grid-flow-col sm:auto-cols-max">
                <span className="mr-10 font-bold">
                <a href={"https://doqs.dev"}>doqs.dev</a>
              </span>
                <nav className="grid grid-flow-col auto-cols-max gap-x-5">
                  <a href="https://doqs.dev/imprint" title="Imprint">Imprint</a>
                </nav>
              </div>

            </footer>
          </div>
        </div>
      </>
  )
}