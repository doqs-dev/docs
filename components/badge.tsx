import { PropsWithChildren } from "react";

export type BadgeType = 'success' | 'warning' | 'error' | 'info'

type BadgeProps = {
  type: BadgeType,
  size?: 'sm' | 'md'
};

export const Badge = ({children, type, size}: PropsWithChildren<BadgeProps>) => {

  if (!size) {
    size = 'md'
  }


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

  let sizeClass = '';
  switch (size) {
    case "md":
      sizeClass = 'px-3 py-1'
  }

  return (
      <span className={`${className} ${sizeClass} rounded`}>
        {children}
      </span>
  );
};