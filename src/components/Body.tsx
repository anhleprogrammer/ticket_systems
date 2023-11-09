import TicketCard from "./TicketCard";
import { SortContext } from "../contexts/SortContext";
import { TicketDataContext, Ticket } from "../contexts/TicketDataContext";
import { SearchContext } from "../contexts/SearchContext";
import { useContext, useEffect, useState } from "react";
const priorityInNumber: { [key: string]: number } = {
  Low: 0,
  Medium: 1,
  High: 2,
};
function Body() {
  const { sortOption } = useContext(SortContext);
  const { ticketsState, page } = useContext(TicketDataContext);
  const { searchInput } = useContext(SearchContext);
  const [curTickets, setCurTickets] = useState(ticketsState);
  if (sortOption.option === "priority") {
    curTickets.sort((a: any, b: any) =>
      sortOption.order === "asc"
        ? priorityInNumber[a.priority] - priorityInNumber[b.priority]
        : priorityInNumber[b.priority] - priorityInNumber[a.priority]
    );
  } else if (sortOption.option === "status") {
    curTickets.sort((a: any, b: any) =>
      sortOption.order === "asc"
        ? a.status.localeCompare(b.status)
        : b.status.localeCompare(a.status)
    );
  } else {
    curTickets.sort((a: any, b: any) => {
      const dateA = new Date(a.created).getTime();
      const dateB = new Date(b.created).getTime();

      return sortOption.order === "asc" ? dateB - dateA : dateA - dateB;
    });
  }

  // const handleDisplay = () => {
  //   let startInd = (page - 1) * 8;
  //   let endInd = startInd + 8;
  //   const newTickets = ticketsState.slice(startInd, endInd);
  // };

  useEffect(() => {
    let startInd = (page - 1) * 8;
    let endInd = startInd + 8;
    let newTickets = ticketsState.slice(startInd, endInd);
    if (searchInput !== "") {
      newTickets = ticketsState.filter(
        (ticket: Ticket) =>
          ticket.id.toString().includes(searchInput) ||
          ticket.name.includes(searchInput) ||
          ticket.subject.includes(searchInput)
      );
    }
    setCurTickets(newTickets);
  }, [searchInput, ticketsState]);
  return (
    <div className="bg-gray-100 h-full p-4  overflow-auto">
      {curTickets.map((ticket: Ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Body;
