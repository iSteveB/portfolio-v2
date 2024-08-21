type CollapseArrowProps = {
  color: string;
  rotate: boolean;
}

const CollapseArrow: React.FC<CollapseArrowProps> = ({ color, rotate }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={`absolute right-10 top-1/2 size-6 -translate-y-1/2 cursor-pointer transition-all duration-300 ${color} ${rotate ? '' : 'rotate-90'}`}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      ></path>
    </svg>
  );
}

export default CollapseArrow;
