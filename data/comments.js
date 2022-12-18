const mongoCollections = require("../MongoConnection/mongoCollection")
const comments = mongoCollections.comments;
const posts = mongoCollections.posts;
const users = mongoCollections.users;


const addComment = async (username, content, title) =>{
    //load collections
    const commentCollection = await comments();
    const postCollection = await posts();
    const userCollection = await users();


    //format username
    let nameOfUser = username.toLowerCase();
    //find user by username
    const foundUser = await userCollection.findOne({username:nameOfUser});
    //capture userID
    let userID = foundUser._id;


    //find the post by the title
    const foundPost = await postCollection.findOne({title: title});

    let postID = foundPost._id;



    const newComment =
    {
        userID: userID,
        postID: postID,
        username: nameOfUser,
        content: content
    };


    //insert into comment collection
    const insertInfo = await commentCollection.insertOne(newComment);
    if (!insertInfo.acknowledged || !insertInfo.insertedId)
      throw 'Could not add ';

    //update both user and post collection to reflect the new comment
    const updatedUser = await userCollection.updateOne({username:nameOfUser}, {$push:{comments:newComment}});
    const updatedPost = await postCollection.updateOne({title:title}, {$push:{comments:newComment}});


    console.log(updatedUser);
    console.log(updatedPost);
    




    



    


    return newComment;

};

module.exports = { addComment};