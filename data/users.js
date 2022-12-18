const mongoCollections = require("../MongoConnection/mongoCollection")
const users = mongoCollections.users;
const bcrypt = require("bcrypt");
const helpers = require("./datahelpers");
const { post } = require("../routes/jobNetworkRoutes");
const companyList = mongoCollections.companies;
const postList = mongoCollections.posts;

console.log(mongoCollections);

const createUser = async (
  email, 
  password,
  username,
  birthday, 
  firstName,
  lastName
) => { 

  //console.log(1);

  if(!username || !password || !lastName || !firstName || !birthday || !email) {
    throw "Please supply, first name, lastname, email, birthday, username, and password";
  }

  //console.log(2);


  if(typeof username !== 'string') {
    throw "Please supply only a string value for username";
  }

  //console.log(3);


  if(typeof password !== 'string') {
    throw "Please supply only a string value for password";
  }

  if(typeof firstName !== 'string' || typeof lastName != 'string') {
    throw "Please supply only a string value for first name and last name";
  }

  //console.log(4);


  if(password.length < 6 || username.length < 4) {
    throw "Your username or password was too short in length";
  }

  //console.log(5);


  helpers.isAlpha(username);

  //console.log(6);

  if(helpers.checkEmail(email) == false) {
    throw "Bad email";
  }


  username = username.toLowerCase();

  helpers.isValidDate(birthday);



  const userCollection = await users();

  console.log(8);



  const foundUser = await userCollection.find({username}).toArray();
  console.log("foundUser: ", foundUser);
  if(foundUser.length > 0) {
    throw "Sorry. This username is taken. Please try another username";
  }

  const hash = await bcrypt.hash(password, 10)
  const newUser = 
  {
    email: email,
    password: hash,
    username: username,
    birthday: birthday,
    firstName: firstName,
    bio: null,
    logo: null,
    jobs: [],
    posts: [],
    comments: [],
    followedUsers: [],
    likedPosts: [],
    jobListings: [],
    skills: []

  };

  
  const dataInput =  await userCollection.insertOne(newUser);

  if (dataInput.insertedCount === 0) throw 'Could not add user';

  //const newUser = dataInput;

 // const user = await checkUser(newUser.username, newUser.password);




  return {insertedUser: true};
};

const checkUser = async (username, password) => { 


  if(!username || !password) {
    throw "Please supply both a username and password";
  }

  if(typeof username !== 'string') {
    throw "Please supply only a string value for username";
  }


  if(typeof password !== 'string') {
    throw "Please supply only a string value for password";
  }


  if(password.length < 6 || username.length < 4) {
    throw "Your username or password was too short in length";
  }

  helpers.isAlpha(username);

  username = username.toLowerCase();

  const userCollection = await users();


  const foundUser = await userCollection.findOne({username});

  if(!foundUser) {
    throw "Invalid username";
  }

  const match = await bcrypt.compare(password, foundUser.password); 


  if(!match) {
    throw "Invalid password";
  }


  return {authenticatedUser: true};


};

const updateUser = async (username,jobs,bio,education,skills) => {


  let nameOfUser = username.toLowerCase();


  const updates = 
  {
    jobs: jobs,
    bio: bio,
    education: education,
    skills: skills,
    username: nameOfUser
  }

  const userCollection = await users();

  const updatedUserProfile = await userCollection.updateMany(
    {username:nameOfUser},
    {$set: updates}
  );


  return updates;


}

const updateFollowers = async(username1, username2) =>{
  const userCollection = await users();

  let nameOfUser = username1.toLowerCase();
  let followedUser = username2.toLowerCase();

  const findMe = await userCollection.findOne({username: nameOfUser});

  console.log(findMe);




  const foundUser = await userCollection.findOne({username: followedUser});

  //console.log(foundUser);

  if(!foundUser) {
    throw "User does not exist!";
  }



  const updatedFollowing = await userCollection.updateOne({username:nameOfUser}, {$push:{followedUsers: foundUser}});
  console.log(updatedFollowing);
  return true;
}

const getAllPostsByUser = async(username) => {

    let nameOfUser = username.toLowerCase();

    const userCollection = await users();


    const findMe = await userCollection.findOne({username: nameOfUser});

    console.log(findMe);


    const postList = findMe.posts;

 

    console.log(postList);

    return postList;


}


const showUserProfile = async(username) => {

  let nameOfUser = username.toLowerCase();


  const userCollection = await users();


  const findMe = await userCollection.findOne({username: nameOfUser});


  return findMe;


}



module.exports = { 
  createUser,
  checkUser,
  updateUser,
  updateFollowers,
  getAllPostsByUser,
  showUserProfile
};




