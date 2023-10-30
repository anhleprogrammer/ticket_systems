import Navbar from "./components/Navbar";
import TopSetting from "./components/TopSetting";
import SubSetting from "./components/SubSetting";
import Body from "./components/Body";

function App() {
  return (
    <>
      <div className="flex h-screen overflow-hidden	">
        <Navbar />
        <div className="w-full">
          <TopSetting />
          <SubSetting />
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
