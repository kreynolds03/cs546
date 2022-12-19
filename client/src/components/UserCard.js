import React from "react"
import ViewFullPost from "./ViewFullPost"
export default class UserCard extends React.Component{


    render(){

        return(
            <div>
                <h1>Welcome, {this.props.user.username}</h1>
                <h3>Name: {this.props.user.firstName}</h3>
                <h4>Birthday: {this.props.user.birthday}</h4>
                <h4>Email: {this.props.user.email}</h4>
                <p>Bio: {this.props.user.bio}</p>
                <p>Skills: {this.props.user.skills}</p>
                <h4>Posts</h4>
                {console.log(this.props.user.posts)}
                {this.props.user.posts.map(post => {
                return <div>
                    <ViewFullPost post = {post}/>
                    </div>
                    })}
                <h4>Followed Users: </h4>
                {this.props.user.followedUsers.map(user => {
                 return <p>{user}</p>
                })}
            </div>
        )
    }
}