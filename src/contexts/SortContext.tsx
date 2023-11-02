import { createContext, useState } from "react";

export type SortContextType = {
  sortOption: any;
  setSortOption: (sortOption: any) => void;
};

//create a context object with default value

export const SortContext = createContext<SortContextType>({
  sortOption: { option: "", order: "asc" },
  setSortOption: () => {},
});

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
