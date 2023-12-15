import React from "react";
import spinnerStyles from "./spinner.module.scss";

interface SpinnerProps {
  className?: string;
  Color?: string;
  size?: string;
}

const Spinner = ({ className, Color, size, ...props }: SpinnerProps) => {
  return (
    <div
      className={`${className} spinner`}
      {...props}
      style={{
        borderTop: `2px solid ${Color}`,
        width: `${size}`,
        height: `${size}`,
      }}
    />
  );
};

export default Spinner;
