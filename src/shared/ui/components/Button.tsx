import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const baseClasses =
  "w-full pt-2 pb-2 px-8 font-area text-center rounded-full cursor-pointer motion-safe:transition-colors motion-safe:transition-shadow disabled:bg-gray-800/10 disabled:border-gray-800/10 disabled:text-gray-800/30 disabled:cursor-default disabled:shadow-none hover:outline-none hover:shadow-lg";

export const Button = ({
  className = "",
  ...props
}: ButtonProps) => (
  <button
    {...props}
    disabled={props.disabled}
    className={`${baseClasses} ${className}`}
    >
  </button>
);
