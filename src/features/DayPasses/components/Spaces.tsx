import { useContext } from "react";
import { Header } from "./Header";
import SpaceCard from "./SpaceCard";
import { DayPassContext } from "./../../../utils/context";

const Spaces = () => {
  const { centersData } = useContext(DayPassContext);
  console.log(centersData);

  return (
    <div className="my-10">
      <div className="mb-10">
        <Header>Our Space Overview</Header>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-11">
        {centersData?.map((center: any) => (
          <SpaceCard
            key={center.id}
            dayPassPrice={center.day_pass_price}
            id={center.id}
            workSpaceName={center.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Spaces;
