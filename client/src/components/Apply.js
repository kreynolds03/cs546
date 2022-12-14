import axios from "axios";
import React from "react";
import {useState, useEffect} from "react";

// Insert job details here


function Apply({setShowJob, job, user}) {
const [usersResume, setUsersResume] = useState(null);
function onChangeHandler(files) {
    setUsersResume(files);
    console.log("This is the user we are logging", user);
    console.log("This is the file that is being sent", files);
    console.log("This is the job we are applying to", job);
    axios.post('http://127.0.0.1:3001/uploadresume',{job:job._id,username: JSON.parse(user).username, file:files[0].name})
    .then((response)=>{alert("Resume uploaded successfully!"); setShowJob(false)})

}

    return ( <>
    {console.log(job)}
        <h3>{job.jobTitle}</h3>
                <h4>Company: {job.company}</h4>
                <p>Description: {job.description}</p>
                <p>Job ID: {job._id.toString()}</p>
                <p>Education: {job.education}</p>
                <p>Post Date: {job.postDate}</p> 
                <p>Click below to upload your resume:</p>
                <input type="file" name="file" onChange={(event) => onChangeHandler(event.target.files)}/>
                

   </> )




}

export default Apply;