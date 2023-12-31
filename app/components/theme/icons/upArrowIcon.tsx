const UpArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M13 7L7 1L1 7"
        stroke="#25282B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UpArrowIcon;
