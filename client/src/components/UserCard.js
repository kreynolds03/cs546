import React from "react"

export default class UserCard extends React.Component{



    render(){

        return(
            <div>
                <h1>Welcome, {this.props.user.username}</h1>
                <h3>Name: {this.props.user.firstName}</h3>
                <h4>Birthday: {this.props.user.birthday}</h4>
                <h4>Email: {this.props.user.email}</h4>
                <p>Bio: {this.props.user.bio}</p>
            </div>
        )
    }
}