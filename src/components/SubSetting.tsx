import { useContext } from "react";
import { AiFillFilter } from "react-icons/ai";
import { SortContext } from "../contexts/SortContext";
import { TicketDataContext } from "../contexts/TicketDataContext";

import { FcGenericSortingAsc, FcGenericSortingDesc } from "react-icons/fc";
function SubSetting() {
  const { sortOption, setSortOption } = useContext(SortContext);
  const { ticketsState, setTickets } = useContext(TicketDataContext);
  const handleCheckAll = () => {
    const newTickets = ticketsState.map((ticket :any) => ({
      ...ticket,
      checked: !ticket.checked,
    }));
    setTickets(newTickets);
  };
  return (
    <div
      className="bg-gray-50 py-4 px-7 flex justify-between
     items-center text-sm [&>div]:flex [&>div]:gap-4 [&>div]:items-center "
    >
      <div className="left">
        {" "}
        <input type="checkbox" onClick={() => handleCheckAll()} />
        <p>Sort by:</p>
        <select
          className="bg-gray-50 hover:cursor-pointer"
          name="sort"
          id="sort"
          value={sortOption.option}
          onChange={(e) =>
            setSortOption((prev: any) => ({
              ...prev,
              option: e.target.value,
            }))
          }
        >
          <option value="date">Date created</option>
          <option value="status">Status</option>
          <option value="priority">Priority</option>
        </select>
        {sortOption.order === "asc" ? (
          <FcGenericSortingAsc
            className="text-xl hover:cursor-pointer "
            onClick={() =>
              setSortOption((prev: any) => ({
                ...prev,
                order: "desc",
              }))
            }
          />
        ) : (
          <FcGenericSortingDesc
            className="text-xl hover:cursor-pointer"
            onClick={() =>
              setSortOption((prev: any) => ({
                ...prev,
                order: "asc",
              }))
            }
          />
        )}
      </div>
      <div className="right">
        <p>1 - 3 of 3</p>
        <div className="flex">
          <button className="border px-2 hover:cursor-pointer">&lt;</button>
          <button className="border px-2 hover:cursor-pointer">&gt;</button>
        </div>
        <button className="border px-2 text-xl   hover:cursor-pointer">
          <AiFillFilter />
        </button>
      </div>
    </div>
  );
}

export default SubSetting;
