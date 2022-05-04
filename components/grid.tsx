import { PropsWithChildren } from "react";


export const Grid = ({children,}: PropsWithChildren<any>) => (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {children}
    </section>
);