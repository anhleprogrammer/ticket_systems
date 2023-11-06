import Button from "./Button";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineNotification,
} from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import Modal from "./Modal";
import { useState } from "react";
function TopSetting() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-6 flex justify-between w-full border-b border-gray-200 h-12 items-center p-4 [&>*]:hover:cursor-pointer">
      <div className="flex gap-4 items-center  ">
        <BsFilter className="border-2 text-2xl rounded" />
        <p className="font-bold">All Tickets</p>
      </div>

      <div className="flex gap-4">
        <div className="text-small">
          <Button name="Add" setState={() => setOpen(true)} />
          {open && <Modal setClose={setOpen} />}
        </div>
        <div className="text-xl flex gap-4 items-center ">
          <AiOutlineSearch />
          <AiOutlineNotification />
          <div className="border-2 p-1 rounded-full">
            <AiOutlineUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSetting;
