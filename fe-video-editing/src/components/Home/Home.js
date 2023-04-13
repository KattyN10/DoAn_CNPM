import React from "react";
import Gallery from "../Gallery/Gallery";
import Dashboard from "../Dashboard/Dashboard";
import Highlight from "../Highlight/Highlight";
import {FaHome, FaUser,FaCogs} from "react-icons/fa"
import Dropdown from 'react-bootstrap/Dropdown';
import './Home.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../Login/Login";
class Home extends React.Component{
    
    render(){
        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <i
                className="home-heading-logo-user"
              onClick={(e) => {
                e.preventDefault();
                onClick(e);
              }}
            >
              {children}
             
            </i>
          ));
    
          
        return(
            <div className="home-background">
               <div className="home-heading">
                <div className="home-heading-logo"><FaHome/></div>
                <div className="home-heading-title">Video Management</div>
                <div className="home-heading-control">
                    <div className="">Admin <i className="home-heading-logo-user ms-2"><FaUser/></i></div>
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle}  aria-controls="navbar-dark-example">
                            <FaCogs/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Gallery</Dropdown.Item>
                                <Dropdown.Item href="/highlight">Highlight</Dropdown.Item>
                                <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                                <Dropdown.Item href="/login">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </div>
                </div>
                <BrowserRouter>
                <Switch>
                <div className="home-container mt-4">
                <Route path="/highlight">
                    <Highlight/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/" exact>
                    <Gallery/>
                </Route>
                </div>
                </Switch>
                </BrowserRouter>

            </div>
        )
    }
}
export default Home;