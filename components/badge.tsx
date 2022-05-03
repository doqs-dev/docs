import { PropsWithChildren } from "react";

export type BadgeType = 'success' | 'warning' | 'error' | 'info'

type BadgeProps = {
  type: BadgeType
};

export const Badge = ({children, type}: PropsWithChildren<BadgeProps>) => {

  let className = ''

  switch (type) {
    case 'success':
      className = 'bg-green'
      break;
    case 'warning':
      className = 'bg-yellow'
      break;
    case 'error':
      className = 'bg-red-600 text-white'
      break;
    case 'info':
      className = 'bg-blue'
      break;
  }


  return (
      <span className={className + " py-2 px-4 rounded"}>
        {children}
      </span>
  );
};