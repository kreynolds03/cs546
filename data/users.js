const mongoCollections = require("../MongoConnection/mongoCollection")
const users = mongoCollections.users;
const bcrypt = require("bcrypt");
const helpers = require("./datahelpers");

console.log(mongoCollections);

const createUser = async (
  email, 
  password,
  birthday, 
  firstName,
  lastName,
  bio
) => { 

  //console.log(1);

  if(!password || !lastName || !firstName || !birthday || !email) {
    throw "Please supply, first name, lastname, email, birthday, and password";
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

  if(typeof email !== 'string') {
    throw "Please supply only a string value for email";
  }


  //console.log(4);


  if(password.length < 6 || username.length < 4) {
    throw "Your username or password was too short in length";
  }

  //console.log(5);


  helpers.isAlpha(username);

  //console.log(6);


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
    birthday: birthday,
    firstName: firstName,
    bio: bio,
    logo: null,
    jobs: [],
    posts: [],
    comments: [],
    followedUsers: [],
    likedPosts: [],
    jobListings: []

  };

  
  const dataInput =  await userCollection.insertOne(newUser);

  if (dataInput.insertedCount === 0) throw 'Could not add user';

  //const newUser = dataInput;

 // const user = await checkUser(newUser.username, newUser.password);




  return {insertedUser: true};
};

const checkUser = async (email, password) => { 


  if(!email || !password) {
    throw "Please supply both a username and password";
  }

  if(typeof email !== 'string') {
    throw "Please supply only a string value for email";
  }


  if(typeof password !== 'string') {
    throw "Please supply only a string value for password";
  }


  if(password.length < 6) {
    throw "Your password was too short in length";
  }

  helpers.isAlpha(username);

  email = email.toLowerCase();

  const userCollection = await users();


  const foundUser = await userCollection.findOne({email});

  if(!foundUser) {
    throw "Invalid username";
  }

  const match = await bcrypt.compare(password, foundUser.password); 


  if(!match) {
    throw "Invalid password";
  }


  return {authenticatedUser: true};


};

module.exports = { 
  createUser,
  checkUser
};




