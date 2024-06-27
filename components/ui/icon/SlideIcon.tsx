import { twMerge } from "tailwind-merge";

interface SlideIconProps {
  className?: string;
}

export const SlideIcon: React.FC<SlideIconProps> = ({ className }) => {
  return (
    <svg
      width="52"
      height="16"
      viewBox="0 0 52 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-18 w-18", className)}
    >
      <g filter="url(#filter0_b_167_10965)">
        <rect width="52" height="16" rx="8" fill="black" fillOpacity="0.45" />
        <circle cx="10" cy="8" r="2" fill="white" />
        <circle cx="18" cy="8" r="2" fill="white" fillOpacity="0.25" />
        <circle cx="26" cy="8" r="2" fill="white" fillOpacity="0.25" />
        <circle cx="34" cy="8" r="2" fill="white" fillOpacity="0.25" />
        <circle cx="42" cy="8" r="2" fill="white" fillOpacity="0.25" />
      </g>
      <defs>
        <filter
          id="filter0_b_167_10965"
          x="-8"
          y="-8"
          width="68"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_167_10965"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_167_10965"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
