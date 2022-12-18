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

  // const getPostById = async (postId) => {
  //   //console.log(movieId);
  //   helpers.checkId(postId);
  //   const postCollection = await postList();
  //   return await postCollection.findOne({_id: ObjectId(postId)})
  
  // };

  const removePost = async (movieId) => {
    movieId = helper.checkId(movieId);
    const movieCollection = await movies();
  
    return await movieCollection.deleteOne({_id: ObjectId(movieId)});
  };

  const getPostsByFollowers = async(username) => {
    const userCollection = await users();
    username = username.toLowerCase();

    const oneUser = await userCollection.findOne({username:username});

    //TUTOR How do I add new posts from people that I follow into the database in the user collection?

    console.log(oneUser);
    let renderedPosts = oneUser.followedUsers.posts;

    console.log(renderedPosts);

    return renderedPosts;

  }
  




  module.exports = { createPost, getPostsByFollowers, removePost };

