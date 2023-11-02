import { createContext, useContext, useState } from "react";

type SortContextType = {
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

//create a context object with default value

export const SortContext = createContext<SortContextType>({
  sortOption: "",
  setSortOption: () => {},
});

export const SortProvider: React.FC = ({ children }: any) => {
  const [sortOption, setSortOption] = useState("date");

  return (
    <SortContext.Provider value={{ sortOption, setSortOption }}>
      {children}
    </SortContext.Provider>
  );
};
