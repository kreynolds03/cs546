import axios from "axios";
import React from "react";

export default class CreateJob extends React.Component{

    state = {
        jobTitle: '',
        education: '',
        yearsOfExp: null,
        description: '',
        company: '',
        postDate: ''
    }


    eventHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        
        event.preventDefault()

        const data = {
            jobTitle: this.state.jobTitle,
            education: this.state.education,
            yearsOfExp: this.state.yearsOfExp,
            description: this.state.description,
            company: this.state.company,
            postDate: new Date()
        }

        axios.post('http://127.0.0.1:3001/createJob', data)
        .then(res => alert('You have created a '))
        .catch(err => alert('You have recieved the following error: ' + err))
    }


    render(){
        return(
        
        <div className='createJob'>
            <form>
                <label for="jobTitle">Enter Job Title:</label>
                <input type="text" id="jobTitle" name="jobTitle" onChange={this.eventHandler}></input>
                <br></br>
                <label for="education">Enter Education Requirement:</label>
                <input type="text" id="education" name="education" onChange={this.eventHandler}></input>
                <br></br>
                <label for="yearsOfExp">Enter Years Of Experience:</label>
                <input type="number" id="yearsOfExp" name="yearsOfExp" onChange={this.eventHandler}></input>
                <br></br>
                <label for="description">Enter Job Description:</label>
                <input type="text" id="description" name="description" onChange={this.eventHandler}></input>
                <br></br>
                <label for="company">Enter Company Name:</label>
                <input type="text" id="company" name="company" onChange={this.eventHandler}></input>
                <br></br>

                <button type="submit" onClick={this.handleSubmit}>Create Job</button>
            </form>
        </div>)
    }
}