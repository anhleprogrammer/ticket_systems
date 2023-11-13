import Button from "./Button";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import CreateTicketModal from "./CreateTicketModal";
import { useState, useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
function TopSetting() {
  const [open, setOpen] = useState(false);
  const { setSearchInput } = useContext(SearchContext);
  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="px-6 flex justify-between w-full border-b border-gray-200 h-12 items-center p-4 [&>*]:hover:cursor-pointer">
      <div className="flex gap-4 items-center  ">
        <p className="font-bold">All Tickets</p>
      </div>

      <div className="flex gap-4 items-center">
        <div className="text-small">
          <Button name="Add" setState={() => setOpen(true)} />
          {open && <CreateTicketModal setClose={setOpen} />}
        </div>
        <div className="text-xl flex gap-4 items-center">
          <input
            className="border rounded px-2 py-1 text-xs"
            type="text"
            onChange={handleChange}
          />
          <AiOutlineSearch />
          <div className="border-2 p-1 rounded-full">
            <AiOutlineUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSetting;
