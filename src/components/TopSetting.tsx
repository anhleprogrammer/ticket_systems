import Button from "./Button";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { RiNotification4Line } from "react-icons/Ri";
import { MdFilterList } from "react-icons/Md";
function TopSetting() {
  return (
    <div className="px-6 flex justify-between w-full border-b border-gray-200 h-12 items-center p-4 [&>*]:hover:cursor-pointer">
      <div className="flex gap-4 items-center  ">
        <MdFilterList className="border-2 text-2xl rounded" />
        <p className="font-bold">All Tickets</p>
      </div>

      <div className="flex gap-4">
        <div className="text-small">
          <Button name="Add" />
        </div>
        <div className="text-xl flex gap-4 items-center ">
          <AiOutlineSearch />
          <RiNotification4Line />
          <div className="border-2 p-1 rounded-full">
            <AiOutlineUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSetting;
