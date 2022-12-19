import axios from "axios"
import React from "react"
import CreatePost from "./CreatePost"


export default class HomePage extends React.Component{

    state = {
        createPost: false,
        posts: []
    }


    changeState = () => {
        this.setState({
            createPost: !this.state.createPost
        })
    }

    renderFollowedPosts = () => {
        this.props.user.followedUsers.map(username => {
            axios.get(`http://localhost:3001/profile/${username}`)
            .then(res => {
                console.log(res.data)
                res.data.posts.map(post => {
                let newArr = this.state.posts
                newArr.push(post)
                this.setState({
                    posts: newArr
                })})
            }).then(console.log(this.state.posts))     
        
        })

    }




    render(){
        return(
            <div>

                <button onClick={this.changeState}>Create A Post</button>
                {console.log(this.state.createPost)}
                {this.state.createPost? <CreatePost username = {this.props.user.username} setCreatePost = {this.changeState}/> : <></>}
                {this.renderFollowedPosts()}
            </div>
        )
    }
}