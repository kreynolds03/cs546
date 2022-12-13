import React, {useState} from "react";
import Axios from 'axios';

function LoginForm() {
    /*const url = ""
    const [data, setData] = useState({
        username:"",
        password:""
    }*/

    //)
    return (

        <div>
            <form>
                <label for="username">Enter Username:</label>
                <input type="text" id="username" name="username"></input>
                <label for="password">Enter Password:</label>
                <input type="text" id="password" name="password"></input>


            </form>
        </div>
       
    );
}

export default LoginForm;