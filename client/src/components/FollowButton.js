import React from "react";
import axios from "axios";

export default class FollowButton extends React.Component {





    followUser = () => {

        const data = {
            username1: this.props.username1,
            username2: this.props.username2
        }
        axios.put('http://localhost:3001/follow', data)
        .then(res => alert('You have followed the user!'))
        .catch(err => alert(err))
    }

    render(){
        return(
            <button onClick = {this.followUser}>Follow {this.props.username2}</button>
        )
    }
}