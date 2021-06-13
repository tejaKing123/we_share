import "./App.css";
import "./Sidebar.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js"
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Profile from './sidebarlinks/Profile'
function Home() {
  return (
    //BEM
    <div className="app">      

      {/* sidebar*/}
      {/* <Sidebar/>       */}
      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default Home;
