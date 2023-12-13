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
      className={`${className} flex items-center justify-center py-1 px-2 rounded-full`}
      {...props}
      style={{ background: bgColor }}
    >
      <span
        className="text-xs font-normal"
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
