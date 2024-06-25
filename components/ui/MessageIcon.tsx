import { twMerge } from "tailwind-merge";

interface HomeIconProps {
  className?: string;
}
export const MessageIcon: React.FC<HomeIconProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-20 w-20", className)}
    >
      <path
        d="M5 6.5H10M5 10H13M7.68375 16H14.2C15.8802 16 16.7202 16 17.362 15.673C17.9265 15.3854 18.3854 14.9265 18.673 14.362C19 13.7202 19 12.8802 19 11.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V18.3355C1 18.8684 1 19.1348 1.10923 19.2716C1.20422 19.3906 1.34827 19.4599 1.50054 19.4597C1.67563 19.4595 1.88367 19.2931 2.29976 18.9602L4.68521 17.0518C5.17252 16.662 5.41617 16.4671 5.68749 16.3285C5.9282 16.2055 6.18443 16.1156 6.44921 16.0613C6.74767 16 7.0597 16 7.68375 16Z"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
