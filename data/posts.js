const mongoCollections = require("../MongoConnection/mongoCollection")
const postList = mongoCollections.posts;
const helpers = require("./datahelpers");
const {ObjectId} = require('mongodb');
const users = mongoCollections.users;



const createPost = async (
    username,
    title,
    content 
    
  ) => { 
  
      const postCollection = await postList();
      username = username.toLowerCase();
      helpers.isString(username);
      const userCollection = await users();
  
      const newPostInfo = {
        username: username,
        title: title,
        content: content,
        comments: [],
        likes: []
      };

  
      const insertInfo = await postCollection.insertOne(newPostInfo);
      if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw 'Could not add post';


      const updatedUser = await userCollection.updateOne({username:username}, {$push:{posts:newPostInfo}});



  
    console.log(newPostInfo);
      return newPostInfo;
  
  };


  // const removePost = async (movieId) => {
  //   movieId = helper.checkId(movieId);
  //   const movieCollection = await movies();
  
  //   return await movieCollection.deleteOne({_id: ObjectId(movieId)});
  // };

  const getPostsByFollowed = async(username) => {
    const userCollection = await users();
    username = username.toLowerCase();
    helpers.isString(username);

    const oneUser = await userCollection.findOne({username:username});

    //TUTOR How do I add new posts from people that I follow into the database in the user collection?

    console.log(oneUser);
    let followers = oneUser.followedUsers;

    console.log(followers);

    return followers;

  }
  




  module.exports = { createPost, getPostsByFollowed };

