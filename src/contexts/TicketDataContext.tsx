import { createContext, useState } from "react";
import { tickets } from "../data/tickets";

export type Ticket = {
  id: number;
  name: string;
  subject: string;
  created: string;
  status: string;
  priority: string;
  description: string;
  agent: string;
  checked: boolean;
};

type tickedType = {
  tickedOne: boolean;
  tickedAll: boolean;
};

type TicketDataContextType = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  ticketsState: Array<Ticket>;
  setTickets: React.Dispatch<React.SetStateAction<Array<Ticket>>>;
  ticked: tickedType;
  setTicked: React.Dispatch<React.SetStateAction<tickedType>>;
  totalPages: number;
};
//context object - define the object that other component can use
export const TicketDataContext = createContext<TicketDataContextType>({
  page: 0,
  setPage: () => {},
  ticketsState: [],
  setTickets: () => {},
  ticked: { tickedOne: false, tickedAll: false },
  setTicked: () => {},
  totalPages: 0,
});

//context provider
export const TicketDataProvider = ({ children }: any) => {
  let newTickets = tickets.map((ticket) => ({ ...ticket, checked: false }));
  let totalPages = Math.ceil(newTickets.length / 8);
  const [page, setPage] = useState(1);

  const [ticketsState, setTickets] = useState(newTickets);
  const [ticked, setTicked] = useState({ tickedAll: false, tickedOne: false });
  return (
    <TicketDataContext.Provider
      value={{
        ticketsState,
        setTickets,
        ticked,
        setTicked,
        page,
        setPage,
        totalPages,
      }}
    >
      {children}
    </TicketDataContext.Provider>
  );
};
