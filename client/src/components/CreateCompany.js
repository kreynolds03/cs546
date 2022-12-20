import axios from "axios";
import React from "react";

export default class CreateCompany extends React.Component {

    state = {
        company: '',
        about: '',

    }

    eventHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        
        event.preventDefault()

        const data = {
            company: this.state.company,
            about: this.state.about
        }
        
        if(!data.company || !data.about){

            alert("Fields cannot be empty");
            return;

        }

        if((data.company.trim().length === 0) || (data.about.trim().length === 0)){

            alert("Fields cannot have spaces only");
            return;

        }

        axios.post('http://127.0.0.1:3001/createcompany', data)
        .then(res => alert('Thanks for creating the company!'))
        .catch(err => console.log('You have recieved the following error: ', err))

    }

    render(){
        return(
            <div className="createCompany">
            <form>
                <label for="company">Enter Company Name:</label>
                <input type="text" id="company" name="company" onChange={this.eventHandler}></input>
                <br></br>

                <label for="about">Enter Description About Company:</label>
                <input type="text" id="about" name="about" onChange={this.eventHandler}></input>
                <br></br>
       

                <button type="submit" onClick={this.handleSubmit}>Create Company</button>
            </form>
            </div>  
        )
    }
}
