import React from "react";
//import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar'
import SignUp from "./components/SignUp";
import Companies from "./components/Companies";
import Jobs from "./components/Jobs";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//const mongoCollections = require('../public');
///workspaces/cs546/MongoConnection
//const path = require('path');
//const mongoCollections = path.join(__dirname, 'mongoCollection.js');

//const users = mongoCollections.users; // Not using this here, using axios to pull from routes

function App() {
 // const [data, setData] = React.useState(null);
 return(
 <div>
    <Router>

        <NavBar />

        <Routes>
            <Route path ='/login' element={<LoginForm />}></Route>
            <Route path ='/signup' element={<SignUp />}>Sign Up</Route>
            <Route path ='companies' element={<Companies />}>Companies</Route>
            <Route path='/jobs' element={<Jobs />}>Jobs</Route>
            <Route path='/profile' element={<ProfilePage />}>Profile Page</Route>

        </Routes>
    </Router>
 </div>)

 // return null;
}

export default App;
