import React from "react";

interface Props {
  children: React.ReactNode;
  primary?: boolean;
}

export const BackgroundCard = ({ primary = false, children }: Props) => {
  return (
    <div
      className={`${
        !primary ? "bg-buttonSecondaryMain" : "bg-[#FFCF4B]"
      } border-[0.5px]
      ${!primary ? "border-[#EEE7E7]" : "border-[#FFC422]"}
       rounded-md inline-block
      cursor-pointer
       `}
    >
      {children}
    </div>
  );
};
