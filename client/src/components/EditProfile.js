import axios from "axios";
import React from "react";

export default class EditProfile extends React.Component{


    state = {
        bio: this.props.user.bio,
    }

    eventHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    convertUser = (editedUser) => {
        editedUser.username = this.props.user.username
        editedUser.bio = this.state.bio
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const editedUser = {
            username: this.props.user.username,
            bio: this.state.bio
        };

        console.log(editedUser)
        
        if(!editedUser.bio){

            alert("Bio Field Not Provided");
            return;

        }

        if(editedUser.bio.trim().length === 0){

            alert("Bio Field Cannot consist of empty spaces only");
            return;

        }

        axios.put('http://localhost:3001/editprofile', editedUser)
        .then(this.props.getUserData(this.props.user.username))
        .catch(err => alert('Error: ' + err))


    }


    render(){
        return(
            <div>
                <form>
           
                <label for="bio">Bio:</label>
                <input type="text" id="bio" name="bio" defaultValue={this.props.user.bio} onChange={this.eventHandler}></input>
                <br></br>

                {/* <label for="skills">Skills:</label>
                <input type="text" id="skills" name="skills" defaultValue={this.props.user.skills} onChange={this.eventHandler}></input>
                <br></br> */}
              
                <button type="login" onClick={this.handleSubmit}>Edit Profile</button>
                </form>
            </div>
        )
    }
}
