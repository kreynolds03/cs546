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
import HomePage from "./components/HomePage";
import EditProfile from "./components/EditProfile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//const mongoCollections = require('../public');
///workspaces/cs546/MongoConnection
//const path = require('path');
//const mongoCollections = path.join(__dirname, 'mongoCollection.js');

//const users = mongoCollections.users; // Not using this here, using axios to pull from routes


function setUser(user){
    sessionStorage.setItem('token', JSON.stringify(user))
}

function getUser(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}




function App() {


const user = getUser();

//  if(!user){
//     return <LoginForm setUser = {setUser} />
//  }


 return(
 <div>
    <Router>

        <NavBar />

        <Routes>
            <Route path ='/login' element={<LoginForm />}></Route>
            <Route path ='/signup' element={<SignUp />}>Sign Up</Route>
            <Route path='/jobs' element={<Jobs />}>Jobs</Route>
            <Route path='/profile' element={<ProfilePage user = {user}/>}>Profile Page</Route>
            <Route path='/createJob' element={<CreateJob />}>Create Job</Route>
            <Route path='/createCompany' element={<CreateCompany />}>Create Company</Route>
            <Route path ='/' element={<HomePage />}></Route>
            <Route path ='/editProfile' element={<EditProfile user={user}/>}></Route>


        </Routes>
    </Router>
 </div>)

 // return null;
}

export default App;
