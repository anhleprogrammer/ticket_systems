import { createContext, useState } from "react";

type searchContextProps = {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<searchContextProps>({
  searchInput: "",
  setSearchInput: () => {},
});

export const SearchContextProvider = ({ children }: any) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
};
