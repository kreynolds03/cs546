import React from "react";

export default class OtherUserCard extends React.Component {


    viewMoreDetails = () => {
        console.log('view more')
    }


    renderCard = () => {
        if(this.props.user.username != this.props.username){
            
            return(
            <div>
                <h1 onClick={this.viewMoreDetails}>Username: {this.props.user.username}</h1>
                <h3>Name: {this.props.user.firstName}</h3>
                <h4>Birthday: {this.props.user.birthday}</h4>
                <h4>Email: {this.props.user.email}</h4>
                <p>Bio: {this.props.user.bio}</p>
                <p>Skills: {this.props.user.skills}</p>
                <a href = {`/viewMoreDetails/${this.props.user.username}`}>View More Details</a>
            </div>
            )
        }
    }




    render(){
        return(
            <div>
                {console.log(this.props.user)}
                {console.log(this.props.username)}
                {this.renderCard()}
            </div>
        )
    }
}