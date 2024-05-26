import { useRoutes } from "react-router-dom";
import "./App.css";
import Navigation from "./layout/Navigation";
import routes from "./routes/routes";

function App() {
  const elements = useRoutes(routes());

  return (
    <div className="flex flex-col relative mx-auto min-w-[750px] min-h-screen ">
      <div className="absolute inset-0 bg-purple-400 bg-opacity-60 pointer-events-none rounded-lg"></div>
      <div className="relative z-10">
        <Navigation />
        <div className="relative z-20">{elements}</div>
      </div>
    </div>
  );
}

export default App;
