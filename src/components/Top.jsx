import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { FaUserCircle } from "react-icons/fa";
function Top() {
  return (
    <>
      <div className="flex">
        <div className="w-1/3 bg-white m-8 rounded-xl p-4">
          <div className="font-semibold text-xl pb-4">Analysis</div>
          <div className="flex justify-center items-center">
            <div>
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="flex gap-8 py-4 justify-center items-center font-semibold">
            <div>Sale</div>
            <div>Sport</div>
            <div>Unallocated</div>
          </div>
        </div>

        <div className="w-1/3 bg-white mr-8 my-8 rounded-xl p-4">
          <div className="font-semibold text-xl pb-4">Activity Log</div>
          <div className="flex gap-2 pt-4">
            <div className="pt-2 text-4xl">
              <FaUserCircle />
            </div>
            <div>
              <div className="text-lg font-semibold">Cody Fisher</div>
              <div className="text-sm text-gray-500">
                Deleted 2 items from Group Prime
              </div>
            </div>
            <div className="text-sm text-gray-500">Just now</div>
          </div>
          <div className="w-full h-[1px] bg-gray-400 my-2"></div>
          <div className="flex gap-2">
            <div className="pt-2 text-4xl">
              <FaUserCircle />
            </div>
            <div>
              <div className="text-lg font-semibold">Cody Fisher</div>
              <div className="text-sm text-gray-500">
                Deleted 2 items from Group Prime
              </div>
            </div>
            <div className="text-sm text-gray-500">Just now</div>
          </div>
          <div className="w-full h-[1px] bg-gray-400 my-2"></div>
          <div className="flex gap-2">
            <div className="pt-2 text-4xl">
              <FaUserCircle />
            </div>
            <div>
              <div className="text-lg font-semibold">Cody Fisher</div>
              <div className="text-sm text-gray-500">
                Deleted 2 items from Group Prime
              </div>
            </div>
            <div className="text-sm text-gray-500">Just now</div>
          </div>
          <div className="w-full h-[1px] bg-gray-400 my-2"></div>
          <div className="flex gap-2">
            <div className="pt-2 text-4xl">
              <FaUserCircle />
            </div>
            <div>
              <div className="text-lg font-semibold">Cody Fisher</div>
              <div className="text-sm text-gray-500">
                Deleted 2 items from Group Prime
              </div>
            </div>
            <div className="text-sm text-gray-500">Just now</div>
          </div>
          <button className="bg-[#F4B207] py-2 w-full mt-6 rounded-lg text-xl font-semibold text-white">
            View All
          </button>
        </div>

        <div className="w-1/3 bg-white mr-8 my-8 rounded-xl p-4">
          <div className="font-semibold text-xl pb-4">Recent Activity</div>
          <div className="flex justify-center items-center pt-12">
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="flex gap-8 py-4 justify-center items-center font-semibold">
            <div>Sale</div>
            <div>Sport</div>
            <div>Unallocated</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Top;
