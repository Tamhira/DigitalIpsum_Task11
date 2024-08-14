import logo from "../assets/logo.png";
import { MdDashboard, MdGroups, MdPrivacyTip, MdMore } from "react-icons/md";
import { TbCirclePercentageFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosDocument } from "react-icons/io";

function Sidebar() {
  return (
    <>
      <div className="bg-white px-6 pt-6 rounded-xl flex flex-col justify-between w-1/6">
        <div className="pb-6">
          <div className="pb-14">
            <img src={logo} alt="" />
          </div>
          <div className="text-center py-4 flex px-4 gap-2 text-md rounded-xl text-gray-400 hover:bg-[#101E4A] hover:text-white hover:font-bold">
            <div className="pt-1">
              <MdDashboard />
            </div>
            <div>Dashboard</div>
          </div>
          <div className="py-4 flex px-4 gap-2 text-md rounded-xl text-gray-400 hover:bg-[#101E4A] hover:text-white hover:font-bold">
            <div className="pt-1">
              <TbCirclePercentageFilled />
            </div>
            <div>Sale</div>
          </div>
          <div className="py-4 flex px-4 gap-2 text-md rounded-xl text-gray-400 hover:bg-[#101E4A] hover:text-white hover:font-bold">
            <div className="pt-1">
              <FaStar />
            </div>
            <div>Favourite</div>
          </div>
          <div className="py-4 flex px-4 gap-2 text-md rounded-xl text-gray-400 hover:bg-[#101E4A] hover:text-white hover:font-bold">
            <div className="pt-1">
              <MdGroups />
            </div>
            <div>Community</div>
          </div>
          <div className="py-4 flex px-4 gap-2 text-md rounded-xl text-gray-400 hover:bg-[#101E4A] hover:text-white hover:font-bold">
            <div className="pt-1">
              <MdMore />
            </div>
            <div>Explore</div>
          </div>
          <div className=" py-4 flex px-4 gap-2 text-md rounded-xl text-gray-400 hover:bg-[#101E4A] hover:text-white hover:font-bold">
            <div className="pt-1">
              <IoIosDocument />
            </div>
            <div>Document</div>
          </div>
          <div className="py-4 flex px-4 gap-2 text-md rounded-xl text-gray-400 hover:bg-[#101E4A] hover:text-white hover:font-bold">
            <div className="pt-1">
              <MdPrivacyTip />
            </div>
            <div>Privacy</div>
          </div>
        </div>
        <div className="mb-8">
          <div className=" py-4 flex px-4 gap-2 text-md rounded-xl text-gray-400 hover:bg-[#101E4A] hover:text-white hover:font-bold">
            <div className="pt-1">
              <IoMdSettings />
            </div>
            <div>Setting</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
