import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
function Search() {
  return (
    <>
      <div className="bg-white mx-8 flex justify-between py-3 w-[1200px] rounded-xl px-3">
        <div className="flex gap-4">
            <div className="pt-2 text-xl"><FaSearch/></div>
            <div><input type="text" name="" id="" placeholder="Search" className="pt-1"/></div>
        </div>
        <div className="flex gap-3">
            <div className="rounded-xl border border-gray-400 p-2"><FaBell /></div>
            <div className="rounded-xl border border-gray-400 p-2"><IoSettings/></div>
            <div className="text-3xl"><FaUserCircle /></div>
        </div>
      </div>
    </>
  );
}
export default Search;
