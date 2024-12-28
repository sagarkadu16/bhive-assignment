import BackgroundImage from "./../../../assets/images/template0.png";
import Template1 from "./../../../assets/images/template1.png";

const HeaderSection = () => {
  return (
    <div className="sm:h-[514px] border-2 border-transparent relative">
      <div
        className="bg-cover bg-no-repeat bg-center h-[604px] w-[929px] absolute top-0 hidden sm:block"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      <div
        className="bg-cover bg-no-repeat sm:bg-center h-[800px] w-[800px] sm:h-[500px] sm:w-[500px] block sm:absolute sm:right-0 sm:bottom-0"
        style={{ backgroundImage: `url(${Template1})` }}
      ></div>
      <div className="w-[322px] sm:w-[806px] h-[62px] mx-auto mt-2 mb-10 sm:mb-0 sm:mt-40 sm:ml-[120px] text-xl sm:text-heading1 font-bold sm:leading-[70px] sm:text-opacity-100">
        Host your meeting with world-class amenities. Starting at
        <span className="text-buttonPrimaryMain text-opacity-100">
          {" "}
          ₹199/-!
        </span>
      </div>
    </div>
  );
};

export default HeaderSection;
