import React from 'react'
import axios from 'axios'


export default class Jobs extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('https://localhost:3001/jobs')
        .then(response => {console.log(response.data)})
        .catch(error => {
            console.log(error);
        })
    
    }

    render(){
        return(
            <div className='jobs'>
                This is the Jobs COmponent
                <button>Check Data</button>

            </div>
        )
    }
}