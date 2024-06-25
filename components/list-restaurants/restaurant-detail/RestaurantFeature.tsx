import { JsonValue } from "@prisma/client/runtime/library";
import Image from "next/image";
import React, { FC } from "react";

interface RestaurantFeatureProps {
  className?: string;
  featured?: JsonValue;
}

export const RestaurantFeature: FC<RestaurantFeatureProps> = ({
  featured,
  className,
}) => {
  return (
    <>
      {featured &&
        typeof featured === "object" &&
        "text" in featured &&
        typeof featured.text === "string" && (
          <div className={`flex items-start gap-1 md:gap-2 ${className ?? ""}`}>
            {featured &&
              typeof featured === "object" &&
              "icon" in featured &&
              typeof featured.icon === "string" && (
                <Image
                  src={`/${featured.icon}.svg`}
                  width={15}
                  height={15}
                  alt="stars"
                  className="h-[15px] w-[15px] md:h-[18px] md:w-[18px]"
                  priority={true}
                ></Image>
              )}
            <p className="truncate text-xs text-orange md:text-sm">
              {featured.text}
            </p>
          </div>
        )}
    </>
  );
};
