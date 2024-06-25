import { twMerge } from "tailwind-merge";

interface HomeIconProps {
  className?: string;
}
export const AlignIcon: React.FC<HomeIconProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-20 w-20", className)}
    >
      <path
        d="M1 7H19M1 1H19M1 13H19"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
