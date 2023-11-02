import Select from "./Select";
import dateUtils from "../utils/dateUtils.tsx";
type Ticket = {
  id: number;
  name: string;
  subject: string;
  created: string;
  status: string;
  priority: string;
  description: string;
  agent: string;
};

type TicketCardProps = {
  ticket: Ticket;
};
function TicketCard({ ticket }: TicketCardProps) {
  const priority_opts = ["Low", "Medium", "High"];
  const status_opts = ["Open", "Pending", "Resolved"];

  return (
    <div className="card flex text-sm justify-between  p-4 bg-white mb-2">
      <div className="flex justify-between gap-4 text-sm items-center">
        <input type="checkbox" />

        <p className="ticket-name w-4 border px-4 py-2 border-black rounded">
          {ticket.name.charAt(0)}
        </p>

        <div>
          <p className="hover:cursor-pointer">
            {ticket.subject} <a>#{ticket.id}</a>
          </p>
          <div className="flex gap-2">
            <p className="hover:cursor-pointer">{ticket.name}</p>
            <p>|</p>
            <p>Created: {dateUtils(ticket.created)}</p>
          </div>
        </div>
      </div>
      <div className="ticket-select mr-24">
        <div>
          <Select options={priority_opts} value={ticket.priority} />
        </div>

        <div>
          <Select options={status_opts} value={ticket.status} />
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
