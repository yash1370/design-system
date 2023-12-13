import React, { useState } from "react";
import inputStyles from "./input.module.scss";
import VisibleEyeIcon from "../theme/icons/visibleEyeIcon";
import InvisibleEyeIcon from "../theme/icons/invisibleEyeIcon";

interface InputProps {
  variant?: "text" | "password";
  label: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const Input = ({
  variant = "text",
  label,
  className,
  placeholder,
  disabled,
  ...props
}: InputProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div className="grid gap-2">
        <label htmlFor="" className="text-grey-500 text-xs font-semibold">
          {label}
        </label>
        <input
          type={variant === "password" ? (show ? "text" : "password") : variant}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
          className={`${inputStyles.input} ${className}`}
        />
      </div>
      {variant === "password" && (
        <div className="absolute right-2.5 top-[33px]">
          <span onClick={() => setShow(!show)}>
            {show ? (
              <InvisibleEyeIcon className="text-grey-400 cursor-pointer" />
            ) : (
              <VisibleEyeIcon className="text-grey-400 cursor-pointer" />
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default Input;
