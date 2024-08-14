import { FaLock } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
function Bottom() {
  return (
    <>
      <div className="flex gap-8">
        <div className="w-2/3 ml-8">
          <div className="flex gap-8">
            <div className="px-6 py-4 bg-white rounded-xl w-[170px]">
              <div className="text-4xl pt-6 pb-8">
                <FaLock />
              </div>
              <div className="font-semibold text-xl pb-1">My Assets</div>
              <div>213 Assets</div>
            </div>

            <div className="px-6 py-4 bg-white rounded-xl w-[170px]">
              <div className="text-4xl pt-6 pb-8">
                <FaShoppingCart />
              </div>
              <div className="font-semibold text-xl pb-1">My Cart</div>
              <div>721 Items</div>
            </div>

            <div className="px-6 py-4 bg-white rounded-xl w-[170px]">
              <div className="text-4xl pt-6 pb-8">
                <MdInsertPhoto />
              </div>
              <div className="font-semibold text-xl pb-1">My Photo</div>
              <div>942844 Photos</div>
            </div>

            <div className="px-6 py-4 bg-white rounded-xl w-[170px]">
              <div className="text-4xl pt-6 pb-8">
                <MdPeopleAlt />
              </div>
              <div className="font-semibold text-xl pb-1">Contact</div>
              <div>51 Contacts</div>
            </div>
          </div>

          <div className="px-6 pt-4 bg-white rounded-xl mt-8 pb-8">
            <div className="flex justify-between py-6">
              <div className="font-semibold text-xl">Purchase</div>
              <div className="text-center py-2 flex px-4 gap-2 text-md rounded-xl bg-[#101E4A] text-white font-bold">
                New Transaction
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-2 border border-gray-500 rounded-xl px-2 py-1">
                <div>Most Recent</div>
                <div className="pt-1">
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="flex gap-2 border border-gray-500 rounded-xl px-2 py-1">
                <div>All Status</div>
                <div className="pt-1">
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="flex gap-2 border border-gray-500 rounded-xl px-2 py-1">
                <div>Billing</div>
                <div className="pt-1">
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="text-gray-400 pt-6 pb-3">12 june 2023</div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="pt-2 text-4xl">
                  <FaUserCircle />
                </div>
                <div className="pt-3">Savannah Nguyen</div>
              </div>
              <div className="pt-3">Success</div>
              <div className="pt-3">21 August 2023</div>
              <div className="pt-3">+233478.00</div>
              <div className="pt-3">Detail</div>
            </div>
            <div className="w-full h-[1px] bg-gray-400 my-4"></div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="pt-2 text-4xl">
                  <FaUserCircle />
                </div>
                <div className="pt-3">Savannah Nguyen</div>
              </div>
              <div className="pt-3">Success</div>
              <div className="pt-3">21 August 2023</div>
              <div className="pt-3">+233478.00</div>
              <div className="pt-3">Detail</div>
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <div className="p-8 bg-white rounded-xl">
            <div className="flex justify-between">
              <div className="font-semibold text-xl">New Request</div>
              <div className="font-semibold">View All</div>
            </div>

            <div className="flex justify-between pt-4">
              <div className="flex gap-4">
                <div className="pt-2 text-4xl">
                  <FaUserCircle />
                </div>
                <div>
                  <div className="text-lg font-semibold">Savannah Hyugen</div>
                  <div className="text-sm text-gray-500">@savannah</div>
                </div>
              </div>
              <div className="flex gap-3 text-gray-500 pl-4 pt-4 text-lg">
                <div>
                  <RxCross2 />
                </div>
                <div>
                  <FaCheck />
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-400 my-2"></div>

            <div className="flex justify-between pt-4">
              <div className="flex gap-4">
                <div className="pt-2 text-4xl">
                  <FaUserCircle />
                </div>
                <div>
                  <div className="text-lg font-semibold">Savannah Hyugen</div>
                  <div className="text-sm text-gray-500">@savannah</div>
                </div>
              </div>
              <div className="flex gap-3 text-gray-500 pl-4 pt-4 text-lg">
                <div>
                  <RxCross2 />
                </div>
                <div>
                  <FaCheck />
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-400 my-2"></div>

            <div className="flex justify-between pt-4">
              <div className="flex gap-4">
                <div className="pt-2 text-4xl">
                  <FaUserCircle />
                </div>
                <div>
                  <div className="text-lg font-semibold">Savannah Hyugen</div>
                  <div className="text-sm text-gray-500">@savannah</div>
                </div>
              </div>
              <div className="flex gap-3 text-gray-500 pl-4 pt-4 text-lg">
                <div>
                  <RxCross2 />
                </div>
                <div>
                  <FaCheck />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#101E4A] mt-8 rounded-xl text-[#33CCCC] px-6 py-8">
            <div className="font-bold text-3xl pb-4">Explore more features</div>
            <div className="text-xl pb-8">Get Premium today</div>
            <div className="border border-[#33CCCC] text-xl px-4 py-2 text-center rounded-xl w-[120px]">Get Now</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bottom;
