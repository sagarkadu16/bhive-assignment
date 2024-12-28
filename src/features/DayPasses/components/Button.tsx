import { BackgroundCard } from "./BackgroundCard";
import DirArrows from "./../../../assets/svgs/dirarrows.svg";

interface Props {
  isBulk: boolean;
  price: number;
  days?: number;
  disc?: number;
}

export const Button = ({ isBulk, price, days, disc }: Props) => {
  return (
    <BackgroundCard primary={isBulk}>
      <div className="w-[167px] flex flex-row gap-3 p-2 justify-between">
        <div className="flex flex-col justify-between items-start">
          <div className="text-sm text-textSecondary">
            {isBulk ? "Bulk Pass" : "Day Pass"}
          </div>
          <div className="text-xl text-textMain">
            ₹ {price}
            <span className="text-xs text-textSecondary">
              /{isBulk ? days : ""} Day
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={DirArrows} />
        </div>
      </div>
    </BackgroundCard>
  );
};
