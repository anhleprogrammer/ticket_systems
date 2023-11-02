import Navbar from "./components/Navbar";
import TopSetting from "./components/TopSetting";
import SubSetting from "./components/SubSetting";
import Body from "./components/Body";
import { SortProvider } from "./contexts/SortContext";

function App() {
  return (
    <>
      <div className="flex h-screen overflow-hidden	">
        <Navbar />
        <SortProvider>
          <div className="w-full">
            <TopSetting />
            <SubSetting />
            <Body />
          </div>
        </SortProvider>
      </div>
    </>
  );
}

export default App;
