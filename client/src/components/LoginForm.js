import React, {useState} from "react";
import axios from 'axios';
import './LoginForm.css';
import HomePage from './HomePage';

class LoginForm extends React.Component{

    state = {

        username:'',
        password:'',
        users: []

    };

    componenetDidMount = () => {

        this.resetUserInputs();

    };

    getLoginData = () => {

        axios.get('http://localhost:3001/homepage')
            .then((response) => {

                const data = response.data;
                this.setState({users: data});
                console.log('Data has been received!!');

            })
            .catch(() => {

                console.log('Error retrieving data!!');

            })


    }

    submit = (event) => {

        const boolVal = false;

        event.preventDefault();

        const payload = {

            username: this.state.username,
            password: this.state.password

        };

        this.state.users.map((user, index) => {

            if((payload.username === user.username) && (payload.password !== user.password)){

                console.log("Password inputed for the user is not correct");

            }

            if((payload.username === user.username) && (payload.password === user.password)){


                boolVal = true;

            }

        });

        if(boolVal){

            return <HomePage />;

        }

    }

    resetUserInputs = () => {

        this.setState({

            username:'',
            password:''

        });

    };


    render(){

    return (

        <div className="loginform">
            <form>
                <input type="text" id="username" name="username"></input>
                <br></br>
                <input type="text" id="password" name="password"></input>
                <br></br>
                <br></br>
                <button type="login">Login</button>
                <br></br>
                <br></br>
            </form>
        </div>
       
    );

}

}
export default LoginForm;
