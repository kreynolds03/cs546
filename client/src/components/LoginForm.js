import React, {useState} from "react";
import Axios from 'axios';
import './LoginForm.css'
import axios from "axios";

class LoginForm extends React.Component {


    state = {
            username: '',
            password: ''
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleLogin = (event) => {
        
        event.preventDefault();

        const data = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('https://127.0.0.1:3001/login', data)
        .then(res => this.props.setToken(res))
        .catch(err => alert('You Have Recieved The Following Error: ' + err))

    }




    render(){
        return(
            <div class="loginform">
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" onChange={this.handleChange}></input>
                <br></br>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password"></input>
                <br></br>
                <button type="login" onClick={this.handleLogin}>Login</button>
                <br></br>
            </form>
        </div>
       
        )
    }
}

export default LoginForm;
