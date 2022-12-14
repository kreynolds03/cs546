import React from "react";
//import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar'
import SignUp from "./components/SignUp";
import Jobs from "./components/Jobs";
import ProfilePage from "./components/ProfilePage";
import CreateJob from "./components/CreateJob"
import CreateCompany from "./components/CreateCompany"
import EditProfile from "./components/EditProfile";
import AllUsers from "./components/AllUsers"
import HomePage from './components/HomePage';
import Apply from './components/Apply';
import ViewMoreDetails from "./components/ViewMoreDetails";
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
const [currentJob, setCurrentJob] = React.useState({})
const [user, setUser] = React.useState(null)
// console.log(user);
const [showJob, setShowJob] = React.useState(false)
React.useEffect(() => {

    checkUser();


}, [])
const checkUser = () => {

    const sessionUser = sessionStorage.getItem("user");
    if(sessionUser) setUser(JSON.parse(sessionUser));


}

const getUserData = (username, token) =>{

    axios.get(`http://localhost:3001/profile/${username}`)
        .then(res => res.data)
        .then(data => {

            setUser(data);
            // Add session data logic
            console.log("data:", data);
            console.log("user:", data);
            sessionStorage.setItem("user", JSON.stringify({...data,token}));

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
            console.log(data, "This should show when logging in");
            getUserData(username, data.token);
            // console.log(sessionStorage);

        })
        .catch(err => alert('You recieved the following error: ' + err))

}



const [signUp, setSignUp] = React.useState(false)


if(!user && !signUp){
   return <LoginForm loginUser = {loginUser} setSignUp = {setSignUp}/>
}

if(!user && signUp){
    return <SignUp setSignUp = {setSignUp} />
}

if(showJob) {
    console.log("Hello world");
    return <Apply setShowJob = {setShowJob}  job = {currentJob} user = {sessionStorage.getItem('user')}/>
}


 return(
 <div>
    <Router>

        <NavBar user = {JSON.parse(sessionStorage.getItem('user'))} />

        <Routes>
            <Route path='/' element={<HomePage user = {JSON.parse(sessionStorage.getItem('user'))}/>}>HomePage</Route>
            <Route path ='/login' element={<LoginForm />}></Route>
            <Route path ='/signup' element={<SignUp />}>Sign Up</Route>
            <Route path='/jobs' element={<Jobs setCurrentJob={setCurrentJob} setShowJob={setShowJob} user = {sessionStorage.getItem('user')} />}>Jobs</Route> 
            <Route path='/createJob' element={<CreateJob />}>Create Job</Route>
            <Route path='/createCompany' element={<CreateCompany />}>Create Company</Route>
            <Route path='/profile' element={<ProfilePage user = {sessionStorage.getItem('user')}/>}></Route>
            <Route path='/editProfile' element={<EditProfile user = {JSON.parse(sessionStorage.getItem('user'))} getUserData = {getUserData}/>}></Route>
            <Route path='/allUsers' element={<AllUsers user = {JSON.parse(sessionStorage.getItem('user'))}/>}></Route>
            <Route path='/viewMoreDetails/:username' element={<ViewMoreDetails user = {JSON.parse(sessionStorage.getItem('user'))}/>}></Route>




        </Routes>
    </Router>
 </div>)

 // return null;
}

export default App;
