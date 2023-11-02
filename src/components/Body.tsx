import TicketCard from "./TicketCard";
import { tickets } from "../data/tickets";
import { SortContext } from "../contexts/SortContext";
import { useContext } from "react";
const priorityInNumber: { [key: string]: number } = {
  Low: 0,
  Medium: 1,
  High: 2,
};
function Body() {
  const { sortOption } = useContext(SortContext);
  if (sortOption.option === "priority") {
    tickets.sort((a, b) =>
      sortOption.order === "asc"
        ? priorityInNumber[a.priority] - priorityInNumber[b.priority]
        : priorityInNumber[b.priority] - priorityInNumber[a.priority]
    );
  } else if (sortOption.option === "status") {
    tickets.sort((a, b) =>
      sortOption.order === "asc"
        ? a.status.localeCompare(b.status)
        : b.status.localeCompare(a.status)
    );
  } else {
    tickets.sort((a, b) => {
      const dateA = new Date(a.created).getTime();
      const dateB = new Date(b.created).getTime();

      return sortOption.order === "asc" ? dateB - dateA : dateA - dateB;
    });
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
