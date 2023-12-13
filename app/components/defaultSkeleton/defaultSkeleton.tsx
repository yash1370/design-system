import React from "react";
import ContentLoader from "react-content-loader";

interface DefaultSkeletonProps {
  width?: number;
  height?: number;
  baseColor?: string;
  highlightColor?: string;
  className?: string;
  count?: number;
  borderRadius?: string;
  speed?: number;
}

const DefaultSkeleton = ({
  width,
  height,
  baseColor,
  borderRadius,
  className,
  count,
  highlightColor,
  speed,
  ...props
}: DefaultSkeletonProps) => {
  return (
    <>
      {Array.from(Array(count)).map((n, index) => (
        <div
          key={`skeleton-${n}-${index}`}
          className={`${className} ${count !== 0 && "pb-3"}`}
        >
          <ContentLoader
            width={width}
            height={height}
            speed={speed}
            backgroundColor={baseColor}
            foregroundColor={highlightColor}
            {...props}
          >
            <rect
              rx={borderRadius}
              ry={borderRadius}
              width={width}
              height={height}
            />
          </ContentLoader>
        </div>
      ))}
    </>
  );
};

export default DefaultSkeleton;
