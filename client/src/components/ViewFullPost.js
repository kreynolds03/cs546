import React from "react";

export default class ViewFullPost extends React.Component {

    state = {
        numOfLikes: 0
    }


    countLikes = () => {
        let counter = 0;
        this.props.post.likes.map(like => {
            counter ++;
        })

        this.setState({numOfLikes: counter})
    }


    render(){
        return(
            <div>
                <h4>Title: {this.props.post.title}</h4>
                <p>Content: {this.props.post.content}</p>
                <h5>Comments: </h5>
                {this.props.post.comments.map(comment => {
                    return <p>{comment}</p>
                })}

                {this.countLikes}
                <p>Likes: {this.state.numOfLikes}</p>

            </div>
        )
    }
}