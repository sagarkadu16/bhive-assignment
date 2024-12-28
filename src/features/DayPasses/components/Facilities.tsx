import FacilityOption from "./FacilityOption";
import { Header } from "./Header";
import CTBIcon from "./../../../assets/svgs/cafe-tea-bar.svg";
import CEIcon from "./../../../assets/svgs/ce-svg.svg";
import GymFIcon from "./../../../assets/svgs/gf.svg";
import TimerIcon from "./../../../assets/svgs/timer.svg";
import wfIcon from "./../../../assets/svgs/wifi.svg";
import AffIcon from "./../../../assets/svgs/rs-svg.svg";
import CLIcon from "./../../../assets/svgs/cl-svg.svg";
import SAIcon from "./../../../assets/svgs/sa-svg.svg";

const Facilities = () => {
  return (
    <div className="sm:my-10">
      <div className="mb-10">
        <Header>Why Choose us?</Header>
      </div>
      <div className="flex flex-col divide-y">
        <div className="flex divide-x flex-row gap-2 sm:gap-0 flex-wrap sm:flex-nowrap">
          <FacilityOption icon={CEIcon} eventName="Community Events" />
          <FacilityOption icon={GymFIcon} eventName="Gym Facilities" />
          <FacilityOption icon={wfIcon} eventName="High-Speed WiFi" />
          <FacilityOption icon={CTBIcon} eventName="Cafe & Tea Bar" />
        </div>
        <div className="flex divide-x flex-row gap-2 sm:gap-0 flex-wrap sm:flex-nowrap">
          <FacilityOption icon={AffIcon} eventName="Affordable" />
          <FacilityOption icon={CLIcon} eventName="Comfort Lounges" />
          <FacilityOption icon={TimerIcon} eventName="Quick Booking" />
          <FacilityOption icon={SAIcon} eventName="Sports Area" />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
