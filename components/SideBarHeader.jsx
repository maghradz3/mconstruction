import { FaBuilding } from "react-icons/fa";
import ToogleTheme from "./ToogleTheme";
import Image from "next/image";
import logo from "../assets/m-logo.png";

const SideBarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <Image src={logo} alt="logo" width={50} height={50} />
      <h1 className="text-xl font-extrabold text-secondary mr-auto ">
        Constructions
      </h1>
      <ToogleTheme />
    </div>
  );
};

export default SideBarHeader;
