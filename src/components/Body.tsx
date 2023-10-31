import TicketCard from "./TicketCard";
import { tickets } from "../data/tickets";
function Body() {
  // console.log(tickets);
  return (
    <div className="bg-gray-100 h-full p-4  overflow-auto">
      {tickets.map((ticket) => (
        <TicketCard ticket={ticket} />
      ))}
    </div>
  );
}

export default Body;
