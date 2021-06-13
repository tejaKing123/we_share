import "./App.css";
import {useState} from 'react';
import "./Sidebar.js";
import "./sidebarlinks/Chat.css"
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js"
import Profile from './sidebarlinks/Profile'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./Home";
import FunctionsIcon from '@material-ui/icons/Functions';
import Chat from "./sidebarlinks/Chat.js";
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';

const auth = firebase.auth();


function App() {
  const [user] = useAuthState(auth);
  const [IsLogged,setIsLogged]=useState(false);
  function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
          setIsLogged(true);
    }
  
    return (
      <>
        <div className="sign___in">
          <h1>Please Login with your google account</h1>
          <button  onClick={signInWithGoogle}  style={{marginTop:"20px"}}>Sign in with Google</button>          
        </div>
      </>
    )
  
  }
  
  function SignOut() {
    setIsLogged(false);
    return auth.currentUser && (
      <div className="sign___out"><button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button> </div>   
    )
  }
  

  return (
    //BEM

    <div>
      {/* <Chat/> */}
      <div className="aapp">
        <header className="feed_header">
        <FunctionsIcon  className="sideBarTwitterIcon"/>
        
          <SignOut />
        </header>
      </div>
      {user?
      <div className="app">
              
        {/* sidebar*/}
        <Router>
      
        <div className="side">
        <Sidebar />
        </div>
        <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/profile" component={Profile}/> */}
        <Route path="/chat" component={Chat}/>
        </Switch>
        </Router>
        {/* <Home/> */}
        {/* feed */}
        {/* <Feed /> */}
        {/* widgets */}
        {/* <Widgets /> */}
        {/* <Profile/> */}
      </div>:<SignIn/>
      }
      {/* <SignIn/> */}
    </div>
  );
}



export default App;
