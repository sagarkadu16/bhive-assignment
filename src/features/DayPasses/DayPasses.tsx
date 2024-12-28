import NavBar from "./components/NavBar";
import HeaderSection from "./components/HeaderSection";
import Facilities from "./components/Facilities";
import Spaces from "./components/Spaces";
import { BottomTab } from "./components/BottomTab";
import { BottomContent } from "./components/BottomContent";
import { useState } from "react";
import { DayPassContext } from "./../../utils/context";
import data from "../../Data/data.json";

const DayPasses = () => {
  const [centersData, setCentersData] = useState<any[]>(data);

  return (
    <div>
      <DayPassContext.Provider value={{ centersData }}>
        <NavBar />
        <HeaderSection />
        <div className="px-[120px]">
          <Facilities />
          <Spaces />
          <BottomContent />
        </div>
        <BottomTab />
      </DayPassContext.Provider>
    </div>
  );
};

export default DayPasses;
