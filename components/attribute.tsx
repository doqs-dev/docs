import { PropsWithChildren } from "react";

type AttributeProps = {
  name: string;
  required?: boolean;
};

export const Attribute = ({name, required, children}: PropsWithChildren<AttributeProps>) => {

  return (

      <div className="border-t-2 py-2">
        <div className="mb-1">
          <span className="inline-block bg-gray-700 text-white py-0.5 px-1 rounded text-sm mr-2">{name}</span>
          { required && <span className="text-xs text-red-900">required</span> }
          { (!required && required != null) && <span className="text-xs">optional</span> }
        </div>
        {children}
      </div>
  )
}