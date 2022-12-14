import React from 'react'
import axios from 'axios'


export default class Jobs extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:3001/jobs')
        .then(response => {this.setState({data: response.data})})
        .catch(error => {
            console.log(error);
        })
    
    }
// Make Job Id as a link 
    renderJobs = () => {
        this.state.data.map(job => {
            return (
            <div className='jobCard'>
                <h3>{job.jobTitle}</h3>
                <h4 >Company: {job.company}</h4>
                <p>Description: {job.description}</p>
                <p>Job ID: {job._id.toString()}</p>
                <p>Education: {job.education}</p>
                <p>Post Date: {job.postDate}</p>  
                <button onClick={
                    () => {
                        this.props.setShowJob(true);
                        this.props.setCurrentJob(job);
                    
                    }}
                >Apply to job</button>  
            </div>)
        })
    }

    render(){
        return(
            <div className='jobs'>
                <br></br>
                This is the Jobs COmponent
                <br></br>
                {this.state.data.map(job => {
            return (
            <div className='jobCard'>
                <h3>{job.jobTitle}</h3>
                <h4 >Company: {job.company}</h4>
                <p>Description: {job.description}</p>
                <p>Job ID: {job._id.toString()}</p>
                <p>Education: {job.education}</p>
                <p>Post Date: {job.postDate}</p>  
                <button onClick={
                    () => {
                        this.props.setShowJob(true);
                        this.props.setCurrentJob(job);
                    
                    }}
                >Apply to job</button>  
            </div>)
        })}
                <a href='/createJob'>Create A Job</a>
                <br></br>
                <a href='/createCompany'>Create A Company</a>
            </div>
        )
    }
}