import React from "react";
import textareaStyles from "./textarea.module.scss";

interface TextareaProps {
  label: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const Textarea = ({
  label,
  className,
  disabled,
  placeholder,
  ...props
}: TextareaProps) => {
  return (
    <div className="grid gap-2">
      <label htmlFor="" className="text-grey-500 text-xs font-semibold">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        {...props}
        className={`${textareaStyles.textarea} ${className}`}
      />
    </div>
  );
};

export default Textarea;
