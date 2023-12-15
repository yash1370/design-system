import React from "react";

interface TagProps {
  tag?: string;
  className?: string;
  Color?: string;
  bgColor?: string;
}

const Tag = ({ tag, className, Color, bgColor, ...props }: TagProps) => {
  return (
    <div
      className={`${className} tag-container`}
      {...props}
      style={{ background: bgColor }}
    >
      <span
        className="tag-text"
        style={{
          color: Color,
        }}
      >
        {tag}
      </span>
    </div>
  );
};

export default Tag;
