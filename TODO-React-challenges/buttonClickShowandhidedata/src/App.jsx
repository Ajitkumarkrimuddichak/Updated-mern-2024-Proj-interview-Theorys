import "./App.css";
import HideShow from "./components/HideShow";
import User from "./components/User";
function App() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <HideShow />
        </div>
        <div className="col-span-6">
          <User />
        </div>
      </div>
    </div>
  );
}

export default App;
