const DownArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={14}
      height={8}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="#25282B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownArrowIcon;
