import { PropsWithChildren } from "react";

export type BadgeType = 'success' | 'warning' | 'error' | 'info'

type BadgeProps = {
  type: BadgeType
};

export const Badge = ({children, type}: PropsWithChildren<BadgeProps>) => {

  let className = ''

  switch (type) {
    case 'success':
      className = 'bg-green-400 text-white'
      break;
    case 'warning':
      className = 'bg-amber-500 text-white'
      break;
    case 'error':
      className = 'bg-red-500 text-white'
      break;
    case 'info':
      className = 'bg-blue-400 text-white'
      break;
  }


  return (
      <span className={className + " py-2 px-4 rounded"}>
        {children}
      </span>
  );
};