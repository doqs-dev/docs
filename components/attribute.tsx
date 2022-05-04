import { PropsWithChildren } from "react";

type AttributeProps = {
  name: string;
  required: boolean;
};

export const Attribute = ({name, required, children}: PropsWithChildren<AttributeProps>) => {

  return (

      <div className="border-t-2 py-3">
        <div>
          <span className="inline-block bg-gray-700 text-white p-0.5 rounded text-sm mr-2">{name}</span>
          { required && <span className="text-xs text-red-900">required</span> }
          { !required && <span className="text-xs">optional</span> }
        </div>
        {children}
      </div>
  )
}