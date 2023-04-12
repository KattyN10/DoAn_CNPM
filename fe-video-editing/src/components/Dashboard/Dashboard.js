import React from "react";
import "./Dashboard.scss";
class Dashboard extends React.Component{
    render(){
        return(
            <div className="container-content  mt-5 ms-5">
                <div className="content-heading"><b>Dashboard</b></div>
                <div className="sort-list">
                    <select>
                        <option selected>Sort By</option>
                        <option value="1">Most Views</option>
                        <option value="2">Most Relevant</option>
                        <option value="3">Most Liked</option>
                        <option value="4">Most Dislike</option>
                    </select>
                </div>
                <div className="content-title">
                    <div className="title">
                        Most Views
                    </div>
                </div>
                <div className="content-view mt-3">
                <table class="table text-white">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Type</th>
                    <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
                </div>
                <div className="download-item mt-4 text-center float-sm-end" type="button">
                    Download
                </div>
            </div>
        )
    }
}
export default Dashboard;