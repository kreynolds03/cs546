import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
 
 class SignUp extends React.Component {

    state = {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        birthday: '',
        bio: ''

    }


    eventHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {

        event.preventDefault()

        const data = {
            email: this.state.email,
            password: this.state.password,
            birthday: this.state.birthday,
            firstName: this.state.firstname,
            lastName: this.state.lastname,
        }
        
        axios.post('http://127.0.0.1:3001/register', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        useNavigate('/login')
    }

    render(){


    return(
    <div className='signUp'>,
        <form>
                <label for="firstname">Enter First Name:</label>
                <input type="text" id="firstName" name="firstName" onChange={this.eventHandler}></input>
                <br></br>
                <label for="lastname">Enter Last Name:</label>
                <input type="text" id="lastName" name="lastName" onChange={this.eventHandler}></input>
                <br></br>
                <label for="password">Enter Password:</label>
                <input type="text" id="password" name="password" onChange={this.eventHandler}></input>
                <br></br>
                <label for="email">Enter Email:</label>
                <input type="text" id="email" name="email" onChange={this.eventHandler}></input>
                <br></br>
                <label for="birthday">Enter BirthDay:</label>
                <input type="text" id="birthday" name="birthday" onChange={this.eventHandler}></input>
                <br></br>
       

                <button type="submit" onClick={this.handleSubmit}>Create Profile</button>
            </form>
    </div>
    )}
}

export default SignUp