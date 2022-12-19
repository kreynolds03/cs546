import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'


/*
class SignUp extends React.Component{

    constructor(props){

        super(props);

        this.state = {

            email: '',
            password: '',
            username: '',
            birthday: '',
            firstName: '',
            lastName: ''

        }

    }

    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:3001/register', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
    
    }

    render() {
		const { email, password, username, birthday, firstName, lastName } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="email"
							value={email}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="password"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="username"
							value={username}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
							type="text"
							name="birthday"
							value={birthday}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
							type="text"
							name="firstName"
							value={firstName}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}

}

*/

class SignUp extends React.Component{

    state = {

        email: '',
        password: '',
        username: '',
        birthday: '',
        firstName: '',
        lastName: ''

    };

    componenetDidMount = () => {

        this.resetUserInputs();

    };

    eventHandler = ({ target }) => {

        const { name, value } = target;
        this.setState({ [name]: value});

    };

    submit = (event) => {

        event.preventDefault();

        const payload = {

            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            birthday: this.state.birthday,
            firstName: this.state.firstName,
            lastName: this.state.lastName

        };

        axios({

            url: 'http://localhost:3001/register',
            method: 'POST',
            data: payload

        })

        .then(() => {

            console.log('Data has been sent to the server');
            this.resetUserInputs();

        })
        .catch(() => {

            console.log('internal server error');

        });

        this.props.setSignUp(false)

    };

    resetUserInputs = () => {

        this.setState({

            email: '',
            password: '',
            username: '',
            birthday: '',
            firstName: '',
            lastName: ''

        });

    };

    render(){

        return(

            <div className='signUp'>,
                <form onSubmit={this.submit}>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.eventHandler}></input>
                    <br></br>
                    <input type="text" id="password" name="password" value={this.state.password} onChange={this.eventHandler}></input>
                    <br></br>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.eventHandler}></input> 
                    <br></br>
                    <input type="text" id="birthday" name="birthday" value={this.state.birthday} onChange={this.eventHandler}></input>
                    <br></br>
                    <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.eventHandler}></input>
                    <br></br>
                    <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.eventHandler}></input>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>

        )

    }

}

/*
 
 class SignUp extends React.Component {

    state = {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        birthday: '',
        bio: ''

    }


    eventHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {

        event.preventDefault()

        const data = {
            email: this.state.email,
            password: this.state.password,
            birthday: this.state.birthday,
            firstName: this.state.firstname,
            lastName: this.state.lastname,
        }
        
        axios.post('http://127.0.0.1:3001/register', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        useNavigate('/login')
    }

    render(){


    return(
    <div className='signUp'>,
        <form>
                <label for="firstname">Enter First Name:</label>
                <input type="text" id="firstName" name="firstName" onChange={this.eventHandler}></input>
                <br></br>
                <label for="lastname">Enter Last Name:</label>
                <input type="text" id="lastName" name="lastName" onChange={this.eventHandler}></input>
                <br></br>
                <label for="password">Enter Password:</label>
                <input type="text" id="password" name="password" onChange={this.eventHandler}></input>
                <br></br>
                <label for="email">Enter Email:</label>
                <input type="text" id="email" name="email" onChange={this.eventHandler}></input>
                <br></br>
                <label for="birthday">Enter BirthDay:</label>
                <input type="text" id="birthday" name="birthday" onChange={this.eventHandler}></input>
                <br></br>
       

                <button type="submit" onClick={this.handleSubmit}>Create Profile</button>
            </form>
    </div>
    )}
}

*/

export default SignUp;