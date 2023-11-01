import TicketCard from "./TicketCard";
import { tickets } from "../data/tickets";
function Body() {
  return (
    <div className="bg-gray-100 h-full p-4  overflow-auto">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Body;
