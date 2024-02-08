import type { FC, ForwardedRef, InputHTMLAttributes } from "react";
import { forwardRef, useState } from "react";
import { Icon } from "./Icon";
import { Text } from "./Text";

export type Size =
  | "5xl"
  | "4xl"
  | "3xl"
  | "2xl"
  | "xl"
  | "lg"
  | "base"
  | "sm"
  | "xs";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: Size;
  error?: string;
  label?: string;
  outlined?: boolean;
}

export const DEFAULT_FONT_SIZE: Size = "base";

const baseInputClasses =
  "flex font-area appearance-none h-10 border bg-white border-gray-800/20 hover:border-primary-100 focus-within:border-primary-100 active:border-primary-100 rounded-full w-full py-2 px-4 text-gray-800 placeholder:text-gray-800/20 leading-tight focus:outline-none";

const errorInputClasses = "border-error-100 shadow-sm";

const outlineInputClasses =
  "h-11 ring-primary-100 transition-all duration-75 focus-within:ring-1 hover:ring-1 focus:ring-1";

export const Label: FC<{ label: string; id?: string }> = ({ label, id }) => {
  return (
    <label htmlFor={id} className="cursor-pointer pb-2">
      <Text>{label}</Text>
    </label>
  );
};

export const Input = forwardRef(
  (
    { className, error, label, outlined, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        {label ? <Label label={label} id={props.id} /> : null}
        <div
          className={`
            ${baseInputClasses} 
            text-base 
            ${className ?? ""} 
            ${error ? errorInputClasses : ""} 
            ${outlined ? outlineInputClasses : ""} 
            `}
        >
          <input
            ref={ref}
            {...props}
            className={
              "h-full w-full appearance-none bg-transparent focus:outline-none"
            }
          />
        </div>
      </>
    );
  }
);

Input.displayName = "Input";

export const PasswordInput = ({
  error,
  className,
  label,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      {label ? <Label label={label} id={props.id} /> : null}
      <div
        className={`${baseInputClasses} text-base ${className ?? ""} flex ${
          error ? errorInputClasses : ""
        }`}
      >
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          className={"h-full w-full appearance-none focus:outline-none"}
        />
        <button onClick={toggleShowPassword}>
          {showPassword ? <Icon type="eyeOn" /> : <Icon type="eyeOff" />}
        </button>
      </div>
    </>
  );
};
