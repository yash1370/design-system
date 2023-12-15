import React from "react";
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
    <div className="textarea-container">
      <label htmlFor="" className="input-label">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        {...props}
        className={`textarea ${className}`}
      />
    </div>
  );
};

export default Textarea;
