const mongoCollections = require("../MongoConnection/mongoCollection")
const jobListings = mongoCollections.jobs;


const getAllJobs = async () => {
    const jobCollection = await jobListings();
  
    const jobList = await jobCollection.find({}).toArray();
  
    return jobList;
  };

module.exports = {getAllJobs};