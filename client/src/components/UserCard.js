import React from "react"

export default class UserCard extends React.Component{

   
renderPosts = () => {
    this.props.user.posts.map(post => {
        return <div>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
        </div>
    })
}

renderFollowedUsers = () => {
    this.props.user.followedUsers.map(user => {
        return <p>{user}</p>
    })
}

    render(){

        return(
            <div>
                { console.log(this.props.user)}
                <h1>Welcome, {this.props.user.username}</h1>
                <h3>Name: {this.props.user.firstName}</h3>
                <h4>Birthday: {this.props.user.birthday}</h4>
                <h4>Email: {this.props.user.email}</h4>
                <p>Bio: {this.props.user.bio}</p>
                <p>Skills: {this.props.user.skills}</p>
                <h4>Posts</h4>
                {this.renderPosts()}
                <h4>Followed Users: </h4>
                {this.renderFollowedUsers()}
            </div>
        )
    }
}