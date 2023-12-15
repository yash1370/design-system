import React, { useState } from "react";
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
    <div className="input-container">
      <div className="input-box">
        <label htmlFor="" className="text-grey-500 text-xs font-semibold">
          {label}
        </label>
        <input
          type={variant === "password" ? (show ? "text" : "password") : variant}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
          className={`input-border ${className}`}
        />
      </div>
      {variant === "password" && (
        <div className="password-type">
          <span onClick={() => setShow(!show)}>
            {show ? (
              <InvisibleEyeIcon className="eyeIcon" />
            ) : (
              <VisibleEyeIcon className="eyeIcon" />
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default Input;
