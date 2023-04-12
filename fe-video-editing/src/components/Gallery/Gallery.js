import React from "react";
import "./Gallery.scss";
import Addvideo from "../AddVideo/Addvideo";
import Dropdown from 'react-bootstrap/Dropdown';
import {FaSearch, FaEye,FaPen } from "react-icons/fa";

class Gallery extends React.Component{
    render(){
        const CustomEdit = React.forwardRef(({ children, onClick }, ref) => (
            <i
                type="button"
                className="extension ms-4"
              onClick={(e) => {
                e.preventDefault();
                onClick(e);
              }}
            >
              {children}
             
            </i>
          ));
        return (
            
        <div className="container-content">
             <div className="container-heading">
                 <div className="title mt-4 ms-4">My Assets</div>
                <div className="search-container mt-4">
                <form action="">
                    <input type="search" placeholder="search.."/>
                    <i class="fa fa-search"><FaSearch/></i>
                </form>
                </div>
            </div>
            <div className="container-function mt-4 ms-4">
                <div className="select-all mt-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Select All
                    </label>
                </div>
                <div className="count-select ms-4">Selected: none</div>
                </div>
                <div className="action-list">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                    <a className="btn btn-primary ms-2" href="#scrollspyHeading1">Add</a>
                    </li>
                    <li className="nav-item">
                    <a className="btn btn-primary ms-2" href="#scrollspyHeading2">Edit</a>
                    </li>
                    <li className="nav-item">
                    <a className="btn btn-primary ms-2" href="#scrollspyHeading2">Delete</a>
                    </li>
                    <li className="nav-item">
                    <a className="btn btn-primary ms-2" href="#scrollspyHeading2">Share</a>
                    </li>
                    <li className="nav-item">
                    <a className="btn btn-primary ms-2" href="#scrollspyHeading2">Download</a>
                    </li>
                
                </ul>
                </div>
            </div>
            <div className="sort-list">
                <select>
                    <option selected>Sort By</option>
                    <option value="1">Category</option>
                    <option value="2">Tags</option>
                </select>
            </div>
            <div className="container-list-video mt-4">
            <div className="ms-4 row row-cols-md-4">
            <div className="col">
                <div className="card">
                    <div className="heading-card">
                    <div className="select">
                    <input class="form-check-input" type="checkbox"></input>
                    </div>
                        <div className="item">
                            <div className="view ms-4">7</div>
                            <div className="eyes ms-4"><FaEye/></div>
                            <Dropdown>
                            <Dropdown.Toggle as={CustomEdit}  aria-controls="navbar-dark-example">
                            <FaPen/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Highlight</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Dashboard</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>      
                    </div>
                    <div className="body-card">
                    </div>
                    <div className="footer-card">
                        Title Video</div>         
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="heading-card">
                    <div className="select">
                    <input class="form-check-input" type="checkbox"></input>
                    </div>
                        <div className="item">
                            <div className="view ms-4">7</div>
                            <div className="eyes ms-4"><FaEye/></div>
                            <Dropdown>
                            <Dropdown.Toggle as={CustomEdit}  aria-controls="navbar-dark-example">
                            <FaPen/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Highlight</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Dashboard</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>      
                    </div>
                    <div className="body-card">
                    </div>
                    <div className="footer-card">
                        Title Video</div>         
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="heading-card">
                    <div className="select">
                    <input class="form-check-input" type="checkbox"></input>
                    </div>
                        <div className="item">
                            <div className="view ms-4">7</div>
                            <div className="eyes ms-4"><FaEye/></div>
                            <Dropdown>
                            <Dropdown.Toggle as={CustomEdit}  aria-controls="navbar-dark-example">
                            <FaPen/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Highlight</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Dashboard</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>      
                    </div>
                    <div className="body-card">
                    </div>
                    <div className="footer-card">
                        Title Video</div>         
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="heading-card">
                    <div className="select">
                    <input class="form-check-input" type="checkbox"></input>
                    </div>
                        <div className="item">
                            <div className="view ms-4">7</div>
                            <div className="eyes ms-4"><FaEye/></div>
                            <Dropdown>
                            <Dropdown.Toggle as={CustomEdit}  aria-controls="navbar-dark-example">
                            <FaPen/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Highlight</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Dashboard</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>      
                    </div>
                    <div className="body-card">
                    </div>
                    <div className="footer-card">
                        Title Video</div>         
                </div>
            </div>
            </div>
            </div>
            {/* <Addvideo/> */}
        </div>
        )
    }
}
export default Gallery;