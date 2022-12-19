import axios from "axios";
import React from "react";

export default class CreatePost extends React.Component {

    state = {
        title: '',
        content: ''
    }

    eventHandler = ({ target }) => {

        const { name, value } = target;
        this.setState({ [name]: value});

    };


    // let title = req.body.title;
    // let content = req.body.content;
    // let username = req.body.username;

    submit = () => {
        const data = {
            username: this.props.username,
            title: this.state.title,
            content: this.state.content,
        }

        axios.post('http://localhost:3001/createPost', data)
        .then(res => alert('Post Created!'))
        .catch(err => alert("You recieved an error: " + err))


        this.props.setCreatePost();
    }


    render(){
        return(
            <div>
                  <form onSubmit={this.submit}>
                    <label>Title</label>
                    <input type="text" id="title" name="title" onChange={this.eventHandler}></input>
                    <br></br>
                    <label>Content</label>
                    <input type="text" id="content" name="content"  onChange={this.eventHandler}></input>
                    <br></br>
                
                    <button>Create Post</button>
                </form>
            </div>
        )
    }
}