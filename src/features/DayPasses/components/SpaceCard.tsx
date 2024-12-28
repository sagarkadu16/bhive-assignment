import NavigateIcon from "./../../../assets/svgs/navigate.svg";
import Office from "./../../../assets/images/office.png";
import Badge from "./../../../assets/images/badge.png";
import DirArrows from "./../../../assets/svgs/dirarrows.svg";
import workspaceTag from "./../../../assets/svgs/workspace-tag.svg";
import { BackgroundCard } from "./BackgroundCard";
import { Button } from "./Button";
import { Tags } from "./Tag";

interface SpaceCardProps {
  id: number;
  workSpaceName: string;
  dayPassPrice: number;
}

const SpaceCard = ({ id, workSpaceName, dayPassPrice }: SpaceCardProps) => {
  return (
    <div className="w-[370px] h-[384px] flex flex-col p-3 gap-4 shadow-md">
      <div className="flex flex-row justify-between">
        <h3 className="text-heading4 w-[238px]">{workSpaceName}</h3>
        <BackgroundCard>
          <div className="w-[52px] h-[52px] flex flex-col justify-between items-center p-2">
            <img
              className="w-[18px] h-[18px]"
              src={NavigateIcon}
              alt="navigation"
            />
            <div className="text-[8px] text-[#26323880]">6 Kms</div>
          </div>
        </BackgroundCard>
      </div>
      <div className="relative">
        <img
          src={Office}
          className="w-[346px] h-[202px] rounded-md"
          alt="space-image"
        />
        <Tags name={workSpaceName} />
      </div>
      <div className="flex gap-3">
        <Button isBulk={false} price={dayPassPrice} />
        <Button isBulk={true} price={dayPassPrice * 10} days={10} disc={20} />
      </div>
    </div>
  );
};

export default SpaceCard;
