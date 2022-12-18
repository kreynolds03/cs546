const mongoCollections = require("../MongoConnection/mongoCollection")
const postList = mongoCollections.posts;
const helpers = require("./datahelpers");
const {ObjectId} = require('mongodb');



const createPost = async (
    username,
    title,
    content,
    image, 
    
  ) => { 
  
      const postCollection = await postList();
      username = username.toLowerCase();
      
  
      const newPostInfo = {
        username: username,
        title: title,
        content: content,
        image: image,
        comments: [],
        likes: []
      };

  
      const insertInfo = await postCollection.insertOne(newPostInfo);
      if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw 'Could not add post';
  
    console.log(newPostInfo);
      return newPostInfo;
  
  };

  const getPostById = async (postId) => {
    //console.log(movieId);
    helpers.checkId(postId);
    const postCollection = await postList();
    return await postCollection.findOne({_id: ObjectId(postId)})
  
  };

  const removePost = async (movieId) => {
    movieId = helper.checkId(movieId);
    const movieCollection = await movies();
  
    return await movieCollection.deleteOne({_id: ObjectId(movieId)});
  };
  




  module.exports = { createPost, getPostById, removePost };

