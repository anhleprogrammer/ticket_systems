import { useContext } from "react";
import { AiFillFilter } from "react-icons/ai";
import { SortContext } from "../contexts/SortContext";
import { TicketDataContext, Ticket } from "../contexts/TicketDataContext";
import Button from "./Button.tsx";
import { FcGenericSortingAsc, FcGenericSortingDesc } from "react-icons/fc";
function SubSetting() {
  const { sortOption, setSortOption } = useContext(SortContext);
  const {
    ticketsState,
    setTickets,
    ticked,
    setTicked,
    page,
    setPage,
    totalPages,
  } = useContext(TicketDataContext);
  const handleCheckAll = () => {
    const newTickets = ticketsState.map((ticket: Ticket) => ({
      ...ticket,
      checked: !ticket.checked,
    }));
    setTickets(newTickets);
    setTicked((prev: any) => ({
      ...prev,
      tickedAll: !prev.tickedAll,
    }));
  };

  return (
    <div
      className="bg-gray-50 py-4 px-7 flex justify-between
     items-center text-sm [&>div]:flex [&>div]:gap-4 [&>div]:items-center "
    >
      <div className="left">
        {ticketsState.length > 0 && (
          <div className="flex gap-2">
            <input type="checkbox" onClick={() => handleCheckAll()} />
            {!ticked.tickedOne && !ticked.tickedAll ? (
              <div className="flex gap-2">
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
            ) : (
              <div>
                <Button
                  name="Delete"
                  setState={() => {
                    const newTickets = ticketsState.filter(
                      (ticket: any) => !ticket.checked
                    );
                    setTickets(newTickets);
                    setTicked({ tickedAll: false, tickedOne: false });
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="right">
        <p>
          {page} - {totalPages} of {totalPages}
        </p>
        <div className="flex">
          <button
            className="border px-2 hover:cursor-pointer"
            onClick={() => {
              setPage((prev: any) => {
                if (prev > 1) return prev - 1;
                return prev;
              });
            }}
          >
            &lt;
          </button>
          <button
            className="border px-2 hover:cursor-pointer"
            onClick={() => {
              setPage((prev: any) => {
                if (prev < totalPages) return prev + 1;
                return prev;
              });
            }}
          >
            &gt;
          </button>
        </div>
        <button className="border px-2 text-xl   hover:cursor-pointer">
          <AiFillFilter />
        </button>
      </div>
    </div>
  );
}

export default SubSetting;
