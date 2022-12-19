import axios from "axios";
import React from "react";

export default class EditProfile extends React.Component{


    state = {
        name: this.props.user.firstName,
        email: this.props.user.email,
        birthday: this.props.user.birthday,
        bio: this.props.user.bio,
        username: this.props.user.username,
        password: this.props.user.password
    }

    eventHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    convertUser = (editedUser) => {
        editedUser.username = this.state.username
        editedUser.password = this.state.password
        editedUser.name = this.state.name
        editedUser.email = this.state.email
        editedUser.birthday = this.state.birthday
        editedUser.bio = this.state.bio
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const editedUser = this.props.user;

        this.convertUser(editedUser);

        // axios.post('http://127.0.0.1:3001/editUser, editedUser') ???
        //.then(res => res.JSON())
        //.catch(err => alert('Error: ' + err))


    }


    render(){
        return(
            <div>
                <form>
                <label for="name">Username:</label>
                <input type="text" id="username" name="username" defaultValue={this.props.user.username} onChange={this.eventHandler}></input>
                <br></br>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password" defaultValue={this.props.user.password} onChange={this.eventHandler}></input>
                <br></br>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" defaultValue={this.props.user.name} onChange={this.eventHandler}></input>
                <br></br>
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" defaultValue={this.props.user.email} onChange={this.eventHandler}></input>
                <br></br>
                <label for="birthday">Birthday:</label>
                <input type="text" id="birthday" name="birthday" defaultValue={this.props.user.birthday} onChange={this.eventHandler}></input>
                <br></br>
                <label for="bio">Bio:</label>
                <input type="text" id="bio" name="bio" defaultValue={this.props.user.bio} onChange={this.eventHandler}></input>
                <br></br>
              
                <button type="login" onClick={this.handleSubmit}>Edit Profile</button>
                </form>
            </div>
        )
    }
}