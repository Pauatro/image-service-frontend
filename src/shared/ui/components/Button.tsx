import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const baseClasses =
  "w-full pt-2 pb-2 px-8 font-area bg-purple-200 border border-black text-center rounded-full cursor-pointer motion-safe:transition-colors motion-safe:transition-shadow hover:outline-none hover:shadow-lg";

export const Button = ({ className = "", ...props }: ButtonProps) => (
  <button
    {...props}
    disabled={props.disabled}
    className={`${baseClasses} ${className}`}
  ></button>
);
