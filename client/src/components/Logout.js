import React from 'react'
import axios from "axios";



export default function Logout(){
    const onLogout = () => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        console.log("Here is the user's token", user);
        console.log("Logout");
        const data = {
            token: user.token
        }
        axios.post('http://localhost:3001/logout', data)
        .then(res => res.data)
        .then(data => {
            console.log(data, "Successful logout!");
            sessionStorage.removeItem('user');
        })
        .catch(err => console.log('Error: ',err))
    }

    return(
        <div>
            <button onClick={onLogout}>Logout</button>

        </div>
    )
}