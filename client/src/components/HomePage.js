import React from "react"
import CreatePost from "./CreatePost"


export default class HomePage extends React.Component{

    state = {
        createPost: false
    }


    changeState = () => {
        this.setState({
            createPost: !this.state.createPost
        })
    }




    render(){
        return(
            <div>

                <button onClick={this.changeState}>Create A Post</button>
                {console.log(this.state.createPost)}
                {this.state.createPost? <CreatePost username = {this.props.user.username} setCreatePost = {this.changeState}/> : <></>}
            </div>
        )
    }
}