import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "small" | "medium" | "large";
  loadingText?: string;
  children: string;
  isFullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "large",
  children,
  className,
  isFullWidth = false,
  disabled = false,
  isLoading = false,
  loadingText = "Loading...",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button ${className} ${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : variant === "danger"
          ? "btn-danger"
          : variant === "ghost"
          ? "btn-ghost"
          : ""
      } ${
        size === "small"
          ? "btn-small"
          : size === "medium"
          ? "btn-medium"
          : size === "large"
          ? "btn-large"
          : ""
      } ${isFullWidth === true && "fullWidthBtn"}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="btn-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span>{loadingText}</span>
        </>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};
