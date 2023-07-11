import BottomBar from "./components/BottomBar/BottomBar";
import Content from "./components/Content/Content";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div className={`grid gap-4 grid-col-1 grid-rows-3 h-full w-full`}> 
        <TopBar></TopBar>
        <Content></Content>
        <BottomBar></BottomBar>
    </div>
  );
}

export default App;
