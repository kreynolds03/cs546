const mongoCollections = require("../MongoConnection/mongoCollection")
const jobListings = mongoCollections.jobs;
const companyList = mongoCollections.companies;
const users = mongoCollections.users;
const {ObjectId} = require('mongodb');
//const { jobs } = require("../MongoConnection/mongoCollection");
const helper = require("./datahelpers")



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
    username
  ) => { 

    const userCollection = await users();

    let nameOfUser = username.toLowerCase();
    helper.isString(nameOfUser);
    helper.isString(jobTitle);
    helper.isString(education);
    helper.isString(description);
    helper.isString(company);
    //helper.isValidDate(postDate);

    //if(isNaN(yearsofExp)) throw "Years of experience must be a number!";






    const foundUser = await userCollection.findOne({username:nameOfUser});

    let userId = foundUser._id;

    console.log(userId);

    const jobCollection = await jobListings();

    const companyCollection = await companyList();

    const companyName = company.toLowerCase();


    let foundCompany = await companyCollection.findOne({company:companyName});

    console.log(foundCompany);


      
  
    const newJobInfo = {
      jobTitle: jobTitle,
      education: education,
      yearsofExp: yearsofExp,
      description: description,
      company: companyName,
      postDate: null,
      username: username,
      userId: userId
    };


    const insertInfo = await jobCollection.insertOne(newJobInfo);
    if (!insertInfo.acknowledged || !insertInfo.insertedId)
      throw 'Could not add ';


  const updatedCompany = await companyCollection.updateOne({company:companyName}, {$push:{jobs:newJobInfo}});

  console.log(updatedCompany);

  console.log(newJobInfo);
    return newJobInfo;

  
  };


  const getJobById = async (jobId) => {

    helper.checkId(jobId);
    const jobCollection = await jobListings();
    const jobReq =  await jobCollection.findOne({_id: ObjectId(jobId)})

    //let jobReqNum = jobReq._id.toString(); - This will happen 


    return jobReq;


  }






module.exports = {getAllJobs, getJobByCompany, createJob, getJobById};