const mongoCollections = require("../MongoConnection/mongoCollection")
const jobListings = mongoCollections.jobs;
const companyList = mongoCollections.companies;
const users = mongoCollections.users;


const getAllJobs = async () => {
    const jobCollection = await jobListings();
  
    const jobList = await jobCollection.find({}).toArray();
  
    return jobList;
  };

  const getJobByCompany = async (company) => {
    if (!company) throw 'You must provide a company to search for';
    if (typeof company !== 'string') throw 'Company name must be a string';
    if (company.trim().length === 0)
      throw 'Company cannot be an empty string or just spaces';
    company = company.trim();
    
  
    const companyCollection = await companyList();
    const oneCo = await companyCollection.findOne({company:company});
    if (!oneCo) throw 'No company with that name';
  
    return oneCo.jobs;
  };
  const createJob = async (
    jobTitle,
    education,
    yearsofExp,
    description,
    company,
    postDate,
    username
  ) => { 

      const jobCollection = await jobListings();
      const userCollection = await users ();
      const foundUser = await userCollection.findOne({username:username});
      if (!foundUser) throw "Wrong username!";
      //we need the id of the person who created the job
      let userID = foundUser._id;

     
      
  
      const newJobInfo = {
        userID: userID,
        jobTitle: jobTitle,
        education: education,
        yearsofExp: yearsofExp,
        description: description,
        company: company,
        postDate: postDate

        
      };
   
  
      const insertInfo = await jobCollection.insertOne(newJobInfo);
      if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw 'Could not add job';
  
    console.log(newJobInfo);
      return newJobInfo;
  
  };




module.exports = {getAllJobs, getJobByCompany, createJob};