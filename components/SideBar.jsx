import NavLinks from "./NavLinks";
import SideBarHeader from "./SideBarHeader";

const SideBar = () => {
  return (
    <div className="px-4 w-80 min-h-full bg-base-300 py-12 ">
      <SideBarHeader />
      <NavLinks />
    </div>
  );
};

export default SideBar;
