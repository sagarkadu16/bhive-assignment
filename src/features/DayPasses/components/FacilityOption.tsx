import GfIcon from "./../../../assets/svgs/gf.svg";

interface FacilityBlockProps {
  eventName: string;
  icon: string;
}

const FacilityOption = ({ icon, eventName }: FacilityBlockProps) => {
  return (
    <div className="flex justify-center items-center shadow-md w-[48%] sm:w-[300px] sm:shadow-none p-5 sm:basis-1/4">
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div className="text-sm ml-4">{eventName}</div>
    </div>
  );
};

export default FacilityOption;
