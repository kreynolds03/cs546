const mongoCollections = require("../MongoConnection/mongoCollection")
const fileList = mongoCollections.files;
const users = mongoCollections.users;
const jobList = mongoCollections.jobs;
const Binary = require("mongodb").Binary;
const {ObjectId} = require('mongodb');


const uploadFile = async (filename, username, jobListingId) => {

   

    const fileCollection = await fileList();

    const userCollection = await users();

    const jobCollection = await jobList();



    const nameOfUser = username.toLowerCase();


    const user = await userCollection.findOne({username:nameOfUser});

    if(!user) {
        throw "Need a valid username";
    }

    const job = await jobCollection.findOne({_id:ObjectId(jobListingId)});

    if(!job) {
        throw "Need a valid job";
    }



    const newFileInfo = {
        username: username,
        filename: filename,
        jobListingId: ObjectId(jobListingId)
    }

    const oneFile = await fileCollection.insertOne(newFileInfo);

    if (!oneFile.acknowledged || !oneFile.insertedId)
      throw 'Could not add ';







}


const downloadFile = async () => {
    
}


const downloadFilesByUser = async () => {
    
}

const downloadAllFiles = async () => {
    
}

const deleteFile = async () => {
    
}


module.exports = { uploadFile, downloadFile, downloadFilesByUser, downloadAllFiles, deleteFile}