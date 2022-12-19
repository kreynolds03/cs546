import React from "react";
//import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar'
import SignUp from "./components/SignUp";
// import Jobs from "./components/Jobs";
import ProfilePage from "./components/ProfilePage";
import CreateJob from "./components/CreateJob"
import CreateCompany from "./components/CreateCompany"
import EditProfile from "./components/EditProfile";
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from "axios";


//const mongoCollections = require('../public');
///workspaces/cs546/MongoConnection
//const path = require('path');
//const mongoCollections = path.join(__dirname, 'mongoCollection.js');

//const users = mongoCollections.users; // Not using this here, using axios to pull from routes

/*

function setUser(user){
    sessionStorage.setItem('token', JSON.stringify(user))
}

*/
function getUser(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

function App() {


// const user = getUser();
const [user, setUser] = React.useState(null)
// console.log(user);
React.useEffect(() => {

    checkUser();


}, [])
const checkUser = () => {

    const sessionUser = sessionStorage.getItem("user");
    if(sessionUser) setUser(JSON.parse(sessionUser));


}

const getUserData = (username) =>{

    axios.get(`http://localhost:3001/profile/${username}`)
        .then(res => res.data)
        .then(data => {

            setUser(data);
            // Add session data logic
            console.log("data:", data);
            console.log("user:", data);
            sessionStorage.setItem("user", JSON.stringify(data));

        })

}
const loginUser = (username, password) => {

        const data = {
            username, 
            password
        }

        axios.post('http://localhost:3001/login', data)
        .then(res => res.data)
        .then(data => {
            getUserData(username);
            // console.log(sessionStorage);

        })
        .catch(err => alert('You recieved the following error: ' + err))

}
if(!user){
   return <LoginForm loginUser = {loginUser} />
}


 return(
 <div>
    <Router>

        <NavBar />

        <Routes>
            <Route path='/' element={<HomePage />}>HomePage</Route>
            <Route path ='/login' element={<LoginForm />}></Route>
            <Route path ='/signup' element={<SignUp />}>Sign Up</Route>
            {/* <Route path='/jobs' element={<Jobs />}>Jobs</Route> */}
            <Route path='/createJob' element={<CreateJob />}>Create Job</Route>
            <Route path='/createCompany' element={<CreateCompany />}>Create Company</Route>
            <Route path='/profile' element={<ProfilePage user = {sessionStorage.getItem('user')}/>}>Create Company</Route>
            <Route path='/editProfile' element={<EditProfile user = {JSON.parse(sessionStorage.getItem('user'))}/>}>Create Company</Route>



        </Routes>
    </Router>
 </div>)

 // return null;
}

export default App;
