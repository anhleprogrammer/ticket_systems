import { createContext, useState } from "react";
import { tickets } from "../data/tickets";

export type TicketDataContextType = {
  ticketsState: any;
  setTickets: (sortOption: any) => void;
  ticked: any;
  setTicked: any;
};
//context object - define the object that other component can use
export const TicketDataContext = createContext<TicketDataContextType>({
  ticketsState: [],
  setTickets: () => {},
  ticked: {},
  setTicked: () => {},
});

//context provider
export const TicketDataProvider = ({ children }: any) => {
  const newTickets = tickets.map((ticket) => ({ ...ticket, checked: false }));
  const [ticketsState, setTickets] = useState(newTickets);
  const [ticked, setTicked] = useState({ tickedAll: false, tickedOne: false });
  return (
    <TicketDataContext.Provider
      value={{ ticketsState, setTickets, ticked, setTicked }}
    >
      {children}
    </TicketDataContext.Provider>
  );
};
