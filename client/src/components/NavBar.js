
import React from 'react'
import Logout from './Logout'


export default function NavBar(){

    return(
        <div>
            <a href='/'>Home</a>
            <br></br>
            <a href='/allUsers'>All Users</a>
            <br></br>
            <a href='/jobs'>Jobs</a>
            <br></br>
            <a href='/profile'>Profile Page</a>
            <Logout />
        </div>
    )
}