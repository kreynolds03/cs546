import React from 'react'


export default function Logout(){
    const onLogout = () => {
        console.log("Logout");
    }

    return(
        <div>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}