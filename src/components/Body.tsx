import TicketCard from "./TicketCard";
import { SortContext } from "../contexts/SortContext";
import { TicketDataContext } from "../contexts/TicketDataContext";
import { useContext } from "react";
const priorityInNumber: { [key: string]: number } = {
  Low: 0,
  Medium: 1,
  High: 2,
};
function Body() {
  const { sortOption } = useContext(SortContext);
  const { ticketsState } = useContext(TicketDataContext);
  if (sortOption.option === "priority") {
    ticketsState.sort((a: any, b: any) =>
      sortOption.order === "asc"
        ? priorityInNumber[a.priority] - priorityInNumber[b.priority]
        : priorityInNumber[b.priority] - priorityInNumber[a.priority]
    );
  } else if (sortOption.option === "status") {
    ticketsState.sort((a: any, b: any) =>
      sortOption.order === "asc"
        ? a.status.localeCompare(b.status)
        : b.status.localeCompare(a.status)
    );
  } else {
    ticketsState.sort((a: any, b: any) => {
      const dateA = new Date(a.created).getTime();
      const dateB = new Date(b.created).getTime();

      return sortOption.order === "asc" ? dateB - dateA : dateA - dateB;
    });
  }
  return (
    <div className="bg-gray-100 h-full p-4  overflow-auto">
      {ticketsState.map((ticket: any) => (
        <TicketCard key={ticketsState.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Body;
