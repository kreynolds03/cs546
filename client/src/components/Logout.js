import React from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'




export default function Logout(){
    let navigate = useNavigate()

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
            navigate("/login")
        })
        .catch(err => console.log('Error: ',err))
    }

    return(
        <div>
            <button onClick={onLogout}>Logout</button>

        </div>
    )
}