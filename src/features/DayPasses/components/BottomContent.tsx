import { Header } from "./Header";
import ApssImg from "./../../../assets/images/appss.png";
import PlayStore from "./../../../assets/images/play-store.png";
import AppStore from "./../../../assets/images/app-store.png";

export const BottomContent = () => {
  const handlePlayStoreClick = () => {
    console.log("redirect to play store!");
  };

  const handleAppStoreClick = () => {
    console.log("redirect to app store!");
  };

  return (
    <div className="my-10 relative">
      <div className="mb-6 ml-12">
        <Header color="#605F5F">Download our app now</Header>
      </div>
      <div className="flex flex-row gap-4 border border-[#EEE7E7] rounded-t-lg shadow-md bg-white mb-10 mt-48 h-[250px]">
        <div className="mt-[20px] absolute left-[32px] bottom-0">
          <img src={ApssImg} alt="download" />
        </div>
        <div className="w-[700px] ml-[510px] p-10">
          <div className="mb-10 text-[#605F5F] text-xl hidden sm:block">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </div>
          <div className="sm:flex hidden sm:flex-row gap-2">
            <img
              src={PlayStore}
              onClick={handlePlayStoreClick}
              alt="play-store"
              className="cursor-pointer"
            />
            <img
              src={AppStore}
              onClick={handleAppStoreClick}
              alt="app-store"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
