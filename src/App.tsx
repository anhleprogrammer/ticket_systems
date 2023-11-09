import Navbar from "./components/Navbar";
import TopSetting from "./components/TopSetting";
import SubSetting from "./components/SubSetting";
import Body from "./components/Body";
import { SortProvider } from "./contexts/SortContext";
import { TicketDataProvider } from "./contexts/TicketDataContext";
import { SearchContextProvider } from "./contexts/SearchContext";

function App() {
  return (
    <>
      <div className="flex h-screen overflow-hidden	">
        <TicketDataProvider>
          <SortProvider>
            <SearchContextProvider>
              <Navbar />
              <div className="w-full">
                <TopSetting />
                <SubSetting />
                <Body />
              </div>
            </SearchContextProvider>
          </SortProvider>
        </TicketDataProvider>
      </div>
    </>
  );
}

export default App;
