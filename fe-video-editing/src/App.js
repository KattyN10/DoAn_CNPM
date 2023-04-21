import SignUp from './components/SignUp/SignUp';
 import Login from './components/Login/Login';
 import Dashboard from './components/Dashboard/Dashboard';
 import Highlight from './components/Highlight/Highlight';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home/Home';
import './App.css';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <BrowserRouter>
     
      <Switch>
          <Route path="/login">
          <div className="App">
              <Login/>  
          </div>
          </Route>
          <Route path="/register">
          <div className="App">
              <SignUp/>  
          </div>
          </Route>
          <Home/>
          <Route path="/" exact>
          <div className="App">  
          </div>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
