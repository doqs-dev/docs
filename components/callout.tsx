import { PropsWithChildren } from "react";

export const Callout = ({children}: PropsWithChildren<any>) => {

  return (
      <div className="flex border border-primary/75 px-2 pt-2 -pb-3 border-2 bg-primary/10 ">
        <div className="text-primary mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"/>
          </svg>
        </div>
        <div>
          {children}
        </div>
      </div>
  )

};