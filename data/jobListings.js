const mongoCollections = require("../MongoConnection/mongoCollection")
const jobListings = mongoCollections.job_listings;


const getAllJobs = async () => {
    const jobCollection = await jobListings();
  
    const jobList = await jobCollection.find({}).toArray();
  
    return jobList;
  };

module.exports = {getAllJobs};