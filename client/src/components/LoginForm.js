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
        event.preventDefault();

        if(!this.state.username || !this.state.password) {
            alert("Please supply both a username and password");
            return;
          }

          if((this.state.username.trim().length === 0) || (this.state.password.trim().length === 0)){

            alert("Username and Password Fields cannot be Empty");
            return;

          }
        
          if(typeof this.state.username !== 'string') {
            alert("Please supply only a string value for username");
            return;
          }
        
        
          if(typeof this.state.password !== 'string') {
            alert("Please supply only a string value for password");
            return;
          }
        
        
          if(this.state.password.length < 6 || this.state.username.length < 4) {
            alert("Your username or password was too short in length");
            return;
          }

          if(/^[A-Za-z0-9]*$/.test(this.state.username) == false) {

            alert("You can only enter alphanumeric characters in your username");
            return;
        
        }

        this.props.loginUser(this.state.username, this.state.password);
        
    }

    setSignUp = () => {
        this.props.setSignUp(true)
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
                <button type="login" onClick = {this.setSignUp}>Sign Up</button>
                <br></br>
                <br></br>
            </form>
        </div>

    );
    }
}

export default LoginForm;
