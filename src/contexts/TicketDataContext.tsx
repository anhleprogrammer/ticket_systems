import { createContext, useState } from "react";
import { tickets } from "../data/tickets";

export type TicketDataContextType = {
  page: number;
  setPage: any;
  ticketsState: any;
  setTickets: (sortOption: any) => void;
  ticked: any;
  setTicked: any;
  totalPages: number;
};
//context object - define the object that other component can use
export const TicketDataContext = createContext<TicketDataContextType>({
  page: 0,
  setPage: () => {},
  ticketsState: [],
  setTickets: () => {},
  ticked: {},
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
