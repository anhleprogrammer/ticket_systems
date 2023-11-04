import { createContext, useState } from "react";
import { tickets } from "../data/tickets";

export type TicketDataContextType = {
  ticketsState: any;
  setTickets: (sortOption: any) => void;
};
//context object - define the object that other component can use
export const TicketDataContext = createContext<TicketDataContextType>({
  ticketsState: [],
  setTickets: () => {},
});

//context provider
export const TicketDataProvider = ({ children }: any) => {
  const newTickets = tickets.map((ticket) => ({ ...ticket, checked: false }));
  const [ticketsState, setTickets] = useState(newTickets);
  return (
    <TicketDataContext.Provider value={{ ticketsState, setTickets }}>
      {children}
    </TicketDataContext.Provider>
  );
};
