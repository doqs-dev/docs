import { PropsWithChildren } from "react";

type AttributeProps = {
  name: string;
  required: boolean;
};

export const Attribute = ({name, required, children}: PropsWithChildren<AttributeProps>) => {

  return (

      <div className="border-t-2 py-3">
        <div>
          <span className="inline-block bg-gray-700 text-white p-0.5 rounded text-sm">{name}</span>
          <span></span>
        </div>
        {children}
      </div>
  )
}