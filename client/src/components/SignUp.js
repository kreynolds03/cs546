import axios from 'axios'
import React from 'react'
 
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
            username: this.state.username,
            birthday: this.state.birthday,
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            bio: this.state.bio
        }
        
        axios.post('https://127.0.0.1:3001/register', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render(){


    return(
    <div className='signUp'>,
        <form>
                <label for="firstname">Enter First Name:</label>
                <input type="text" id="firstname" name="firstname" onChange={this.eventHandler}></input>
                <br></br>
                <label for="lastname">Enter Last Name:</label>
                <input type="text" id="lastname" name="lastname" onChange={this.eventHandler}></input>
                <br></br>
                <label for="username">Enter Username:</label>
                <input type="text" id="username" name="username" onChange={this.eventHandler}></input>
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
                <label for="bio">Enter Bio:</label>
                <input type="text" id="bio" name="bio" onChange={this.eventHandler}></input>
                <br></br>

                <button type="submit" onClick={this.handleSubmit}>Create Profile</button>
            </form>
    </div>
    )}
}

export default SignUp