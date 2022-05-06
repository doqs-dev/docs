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
      className = 'bg-green-400 '
      break;
    case 'warning':
      className = 'bg-amber-500'
      break;
    case 'error':
      className = 'bg-red-500'
      break;
    case 'info':
      className = 'bg-blue-400'
      break;
  }

  let sizeClass = '';
  switch (size) {
    case "md":
      sizeClass = 'px-3 py-1';
      break;
    case "sm":
      sizeClass = 'px-1.5 py-0.5'
      break;
  }

  return (
      <span className={`${className} ${sizeClass} text-white rounded`}>
        {children}
      </span>
  );
};