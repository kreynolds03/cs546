import axios from "axios"
import React from "react"

class ProfilePage extends React.Component{


    displayUserDetails = () => {
        const user = this.props.user //Could be wrong depending on what user is. 
        //If this.props.user is an ID, run this:
        //const user = axios.get('http://127.0.0.1:3001/user/{this.props.user}')
        
        return(
            <div> 
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.birthDay}</p>
                <p>{user.bio}</p>
            </div>
        )
    }



    render(){
    return(
        <div className="profilePage">
            <h1>This is the profile Page </h1>
            {this.displayUserDetails}
            <a href = "/editProfile">Edit Profile</a>
        </div>
    )
    }
}

export default ProfilePage