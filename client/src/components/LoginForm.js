import React, {useState} from "react";
import Axios from 'axios';
import './LoginForm.css'
import axios from "axios";

class LoginForm extends React.Component {
   

    state = {
        username: '',
        password: ''
    }

    eventHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()


        const data = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://127.0.0.1:3001/jobs, data')
        .then(res => res.JSON())
        .then(data => this.props.setUser(data))
        .catch(err => alert('You recieved the following error: ' + err))
    }


    render(){
    return (

        <div class="loginform">
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" onChange={this.eventHandler}></input>
                <br></br>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password" onChange={this.eventHandler}></input>
                <br></br>
                <br></br>
                <button type="login" onClick={this.handleSubmit}>Login</button>
                <button type="login">Sign Up</button>
                <br></br>
                <br></br>
            </form>
        </div>
       
    );
    }
}

export default LoginForm;
