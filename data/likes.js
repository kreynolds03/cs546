const mongoCollections = require("../MongoConnection/mongoCollection")
const posts = mongoCollections.posts;
const users = mongoCollections.users;
const likes = mongoCollections.likes;
const helpers = require("./datahelpers");


const addLike = async (username, title) =>{
    //load collections
    const postCollection = await posts();
    const userCollection = await users();
    const likeCollection = await likes();


    //format username
    let nameOfUser = username.toLowerCase();
    //helpers.isString(nameOfUser);
    //find user by username
    const foundUser = await userCollection.findOne({username:nameOfUser});
    //capture userID
    console.log(foundUser);
    let userID = foundUser._id;


    //find the post by the title
    const foundPost = await postCollection.findOne({title: title});
    console.log(foundPost);

    let postID = foundPost._id;



    const newLike =
    {
        userID: userID,
        postID: postID
    };
    console.log(newLike);


    //insert into like collection
    const insertInfo = await likeCollection.insertOne(newLike);
    if (!insertInfo.acknowledged || !insertInfo.insertedId)
      throw 'Could not add ';

    //update both user and post collection to reflect the new like
    const updatedUser = await userCollection.updateOne({username:nameOfUser}, {$push:{likedPosts:newLike}});
    const updatedPost = await postCollection.updateOne({title:title}, {$push:{likes:newLike}});


    console.log(updatedUser);
    console.log(updatedPost);
    




    



    


    return newLike;

};

module.exports = { addLike};