import "./App.css";
import "./Sidebar.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js"

function App() {
  return (
    //BEM
    <div className="app">      

      {/* sidebar*/}
      <Sidebar />

      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
