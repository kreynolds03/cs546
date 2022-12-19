import { useParams } from "react-router-dom";
import {React, useEffect, useState} from "react";
import axios from "axios";
import FollowButton from "./FollowButton";



// function whatever() {
    
//     const currUser = this.props.user.username

//     const data = {
//         username1: currUser,
//         username2: username
//     }

//     console.log(data)

//     axios.put('http://localhost:3001/follow', data)
//     .then(res => alert('You have followed the user!'))
//     .catch(err => alert('You have recieved an error : ' + err))
// }


function ViewMoreDetails(props) {

    const { username } = useParams()


    const [userData, setUserData] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3001/profile/${username}`)
        .then(res => setUserData(res.data))
    })


        return(
            <div>
                {console.log(userData)}
                <h1>{userData.username}</h1>
                <FollowButton username2 = {username} username1 = {props.user.username}/>
                {userData.isCurrentJob == 'Yes' ? <h4>Current Company: {userData.companyName}</h4> : <></>}
                <h4>Education: {userData.education}</h4>
                <h5>Following: </h5>
                {userData.followedUsers.map(user => {
                    return <div>
                        <p>{user.username}</p>
                        </div>
                })}
                <p>Bio: {userData.bio}</p>
                <p>Skills: </p>
                {userData.skills.map(skill => {
                    return <p>{skill}</p>
                })}
            </div>
        )
    }


    export default ViewMoreDetails
