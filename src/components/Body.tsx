import TicketCard from "./TicketCard";
import { tickets } from "../data/tickets";
import { SortContext } from "../contexts/SortContext";
import { useContext } from "react";
const priorityInNumber = {
  Low: 0,
  Medium: 1,
  High: 2,
};
function Body() {
  const { sortOption, setSortOption } = useContext(SortContext);
  if (sortOption === "priority") {
    tickets.sort(
      (a, b) => priorityInNumber[a.priority] - priorityInNumber[b.priority]
    );
  } else if (sortOption === "status") {
    tickets.sort((a, b) => a.status.localeCompare(b.status));
  }
  return (
    <div className="bg-gray-100 h-full p-4  overflow-auto">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Body;
