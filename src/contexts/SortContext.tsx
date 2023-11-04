import { createContext, useState } from "react";

//define type for the context obj
export type SortContextType = {
  sortOption: any;
  setSortOption: (sortOption: any) => void;
};

//create a context object with default value
export const SortContext = createContext<SortContextType>({
  sortOption: { option: "", order: "asc" },
  setSortOption: () => {},
});

//create context provider
export const SortProvider = ({ children }: any) => {
  const [sortOption, setSortOption] = useState({
    option: "date",
    order: "asc",
  });

  return (
    <SortContext.Provider value={{ sortOption, setSortOption }}>
      {children}
    </SortContext.Provider>
  );
};
