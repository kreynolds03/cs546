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
        this.props.loginUser(this.state.username, this.state.password);
        
    }


    render(){
    return (

        <div className="loginform">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={this.eventHandler}></input>
                <br></br>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" onChange={this.eventHandler}></input>
                <br></br>
                <br></br>
                <button type="login">Login</button>
                <button type="login">Sign Up</button>
                <br></br>
                <br></br>
            </form>
        </div>

    );
    }
}

export default LoginForm;

