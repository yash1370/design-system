import React from "react";
import AvatarStyles from "./avatar.module.scss";

interface AvatarProps {
  className?: string;
  firstName?: string;
  lastName?: string;
  src?: string;
  size?: "sm" | "md" | "lg";
}

const Avatar = ({
  firstName,
  className,
  lastName,
  size = "sm",
  src,
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
        <div>
          <img
            {...props}
            src={src}
            className={`${AvatarStyles.avatarImg} ${
              size === "sm"
                ? AvatarStyles.sm
                : size === "md"
                ? AvatarStyles.md
                : size === "lg"
                ? AvatarStyles.lg
                : ""
            } ${className}`}
          />
        </div>
      ) : (
        <div
          className={`${AvatarStyles.avatar} ${
            size === "sm"
              ? AvatarStyles.sm
              : size === "md"
              ? AvatarStyles.md
              : size === "lg"
              ? AvatarStyles.lg
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
