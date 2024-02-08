import type { FC } from "react";
import EyeOff from "./assets/eye-off.svg?react";
import EyeOn from "./assets/eye-on.svg?react";

const Icons = {
  eyeOff: EyeOff,
  eyeOn: EyeOn,
};

export interface IconProps {
  type: keyof typeof Icons;
  className?: string;
  sizeClasses?: string;
}

export const Icon: FC<IconProps> = ({
  type,
  className,
  sizeClasses = "w-5 h-5",
}) => {
  const Component = Icons[type];
  return <Component className={`${className} ${sizeClasses}`} />;
};

export default Icon;
