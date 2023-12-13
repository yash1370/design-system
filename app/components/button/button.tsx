import React from "react";
import buttonStyles from "./button.module.scss";

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
      className={`${buttonStyles.button} ${className} ${
        variant === "primary"
          ? buttonStyles.primary
          : variant === "secondary"
          ? buttonStyles.secondary
          : variant === "danger"
          ? buttonStyles.danger
          : variant === "ghost"
          ? buttonStyles.ghost
          : ""
      } ${
        size === "small"
          ? buttonStyles.smallBtn
          : size === "medium"
          ? buttonStyles.mediumBtn
          : size === "large"
          ? buttonStyles.largeBtn
          : ""
      } ${isFullWidth === true && buttonStyles.fullWidthBtn}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <div className={buttonStyles.shdLoader}>
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
