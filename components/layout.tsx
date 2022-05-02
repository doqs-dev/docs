import Head from "next/head";

// @ts-ignore
export default function Layout({children}) {
  return (
      <>
        <Head>
          <title>Documentation - doqs.dev</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className="flex divide-x-2">
          <aside className="flex-none sticky top-0 overflow-y-auto px-3 h-screen border-slate-100">

            <div id="sidebar-header" className="my-3">
              <img src="logo.svg" width={20} alt="Logo" className={"inline-block"}/>
              <span className={"inline-block pl-2 text-sm"}>doqs</span>
            </div>

            <ul>
              <li>
                <a href="/">Introduction</a>
              </li>
              <li>API Reference</li>
            </ul>

          </aside>
          <div className={"flex-1 divide-y-2"}>
            <main>
              {children}
            </main>
            <footer>Footer</footer>
          </div>
        </div>
      </>
  )
}