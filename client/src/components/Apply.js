import axios from "axios";
import React from "react";
import {useState, useEffect} from "react";

// Insert job details here


function Apply({setShowJob, job}) {
const [usersResume, setUsersResume] = useState(null);
function onChangeHandler(files) {
    setUsersResume(files);
    axios.post()

}

    return (
        <h3>{job.jobTitle}</h3>
                <h4>Company: {job.company}</h4>
                <p>Description: {job.description}</p>
                <p>Job ID: {job._id.toString()}</p>
                <p>Education: {job.education}</p>
                <p>Post Date: {job.postDate}</p> 
                <p>Click below to upload your resume:</p>
                <input type="file" name="file" onChange={onChangeHandler(event.target.files) => {}}/>

    )

    <input type="file" name="file" onChange={this.onChangeHandler}/>



}

export default Apply;