import BhiveLogo from "./../../../assets/images/bhive_logo.png";
import Call from "./../../../assets/svgs/call.svg";
const NavBar = () => {
  return (
    <nav className="fixed flex w-[100%] bg-white flex-row justify-between align-center py-10 md:py-5 px-28 shadow-md z-10">
      <div>
        <img src={BhiveLogo} alt="bhive logo" />
      </div>
      <span className="inline-block border p-1.5 border-buttonPrimaryMain rounded shadow-md cursor-pointer">
        <img src={Call} alt="call-support" />
      </span>
    </nav>
  );
};

export default NavBar;
