import BottomBar from "./components/BottomBar/BottomBar";
import Content from "./components/Content/Content";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div className={`grid grid-cols-1 grid-rows-20 h-full bg-zinc-800`}> 
        <TopBar></TopBar>
        <Content></Content>
        <BottomBar></BottomBar>
    </div>
  );
}

export default App;
