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
      <div className="App">
      <Switch>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/register">
          <SignUp/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
