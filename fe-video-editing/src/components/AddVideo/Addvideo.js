import React from "react";
import "./Addvideo.scss";
import { FaDownload } from "react-icons/fa";

class Addvideo extends React.Component{
    render(){
        return(
            <div className="content-add-video">
                <div className="title text-center mt-4">
                    You dont't have  any video or image yet.
                    <br/>
                Upload your first video now
                </div>
                <div className="view-upload">
                    <div className="title-upload text-center"><p>Upload Gallery</p></div>
                    <div className="body-upload mt-4">
                    <div className="input-name">
                    <div class="input-group">
                        <span class="input-group-text">Name</span>
                        <input type="text" class="form-control"/>
                    </div>
                    </div>
                    <div className="input-select">
                    <label>Type</label>
                        <select className="select-type mt-4">
                                <option selected>Choose</option>
                                <option value="1">Video</option>
                                <option value="2">Image</option>
                        </select>
                    </div>
                    <div className="upload-item" type="button">
                       <FaDownload/> Upload or drag video/image here
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Addvideo;