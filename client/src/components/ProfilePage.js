import axios from "axios"
import React from "react"
import UserCard from "./UserCard"

class ProfilePage extends React.Component{


    render(){
    return(
        <div className="profilePage">
            <UserCard user={JSON.parse(this.props.user)} />
            <a href = "/editProfile">Edit Profile</a>
        </div>
    )
    }
}

export default ProfilePage