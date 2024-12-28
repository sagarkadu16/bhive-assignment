import premiumTag from "./../../../assets/svgs/premium.svg";
import campusTag from "./../../../assets/svgs/campus.svg";
import diamondTag from "./../../../assets/svgs/diamond.svg";
import honeykombTag from "./../../../assets/svgs/honeykomb.svg";
import workspaceTag from "./../../../assets/svgs/workspace-tag.svg";

const getTags = (name: string) => {
  switch (true) {
    case name.includes("Platinum"):
      return { url: diamondTag, value: "Platinum" };
    case name.includes("Workspace"):
      return { url: workspaceTag, value: "Workspace" };
    case name.includes("Honeykomb"):
      return { url: honeykombTag, value: "Honeykomb" };
    case name.includes("Campus"):
      return { url: campusTag, value: "Campus" };
    case name.includes("Premium"):
      return { url: premiumTag, value: "Premium" };
    default:
      return { url: workspaceTag, value: "Workspace" };
  }
};

export const Tags = ({ name }: { name: string }) => {
  const { url, value } = getTags(name);

  return (
    <div className="p-[8px] flex flex-row justify-center items-center bg-gradient-to-r from-[#263238] to-[#2F4B59] rounded-md w-[127px] border-[0.5px] border-[#FFBB0080] absolute top-2 left-2">
      <img src={url} alt="workspace-tag" />
      <div className="text-sm text-logoPrimary2 tracking-[2px]">{value}</div>
    </div>
  );
};
