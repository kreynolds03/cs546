const mongoCollections = require("../MongoConnection/mongoCollection")
const users = mongoCollections.users;
const bcrypt = require("bcrypt");
const helpers = require("./datahelpers");



const createUser = async (
  username, password
) => { 

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


  const foundUser = await userCollection.find({username}).toArray();
  console.log("foundUser: ", foundUser);
  if(foundUser.length > 0) {
    throw "Sorry. This username is taken. Please try another username";
  }

  const hash = await bcrypt.hash(password, 10)

  
  const dataInput =  await userCollection.insertOne({username, password:hash});

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

module.exports = { 
  createUser,
  checkUser
};




