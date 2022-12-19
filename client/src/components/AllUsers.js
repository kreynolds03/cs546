import axios from "axios";
import React from "react";
import OtherUserCard from "./OtherUserCard";

export default class AllUsers extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('http://localhost:3001/homepage')
        // .then(res => res.JSON())
        .then(data => this.setState({
            data: data.data
        }))
    }

    renderUsers = () => {
        if ( this.state.data.length > 0 ){
           
        this.state.data.map(user => {
            return <OtherUserCard />
        })
    }
    }



    render(){
        return(
            
            <div>
                
                <h1>All Users</h1>
                
                {this.state.data.map(user => {
                    return <OtherUserCard user = {user} username = {this.props.user.username}/>
                })}
                </div>
        )
    }
}