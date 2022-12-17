import React, {useState} from "react";
import Axios from 'axios';
import './LoginForm.css'

function LoginForm() {
    const url = "http://localhost:3001/login"
    const [data, setData] = useState({
        username:"",
        password:""
    }

    )
    return (

        <div class="loginform">
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"></input>
                <br></br>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password"></input>
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

export default LoginForm;
