import React from "react";
import Image from "next/image";

interface AvatarProps {
  className?: string;
  firstName?: string;
  lastName?: string;
  src?: string;
  Alt?: string;
  title?: string;
  width?: number;
  height?: number;
  size?: "sm" | "md" | "lg";
}

const Avatar = ({
  firstName,
  className,
  lastName,
  Alt,
  size = "sm",
  src,
  height,
  width,
  title,
  ...props
}: AvatarProps) => {
  let initials = "";
  if (firstName) {
    initials = firstName[0]?.toUpperCase();
  }
  if (lastName) {
    initials = initials.concat(lastName[0]?.toUpperCase());
  }

  return (
    <>
      {src ? (
        <>
          <Image
            {...props}
            src={src}
            width={width}
            height={height}
            alt={`${Alt}`}
            title={title}
            className={className}
          />
        </>
      ) : (
        <div
          title={`${firstName} ${lastName}`}
          className={`avatar ${
            size === "sm"
              ? "small"
              : size === "md"
              ? "medium"
              : size === "lg"
              ? "large"
              : ""
          } ${className}`}
          {...props}
        >
          <span>{initials}</span>
        </div>
      )}
    </>
  );
};

export default Avatar;
