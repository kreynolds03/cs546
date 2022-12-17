const mongoCollections = require("../MongoConnection/mongoCollection")
const postList = mongoCollections.posts;

const createPost = async (
    title,
    content,
    image
  ) => { 
  
      const postCollection = await postList();
      
  
      const newPostInfo = {
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


  module.exports = { createPost };

