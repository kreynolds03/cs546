const mongoCollections = require("../MongoConnection/mongoCollection")
const jobListings = mongoCollections.jobs;
const companyList = mongoCollections.companies;
const users = mongoCollections.users;
const {ObjectId} = require('mongodb');
const { jobs } = require("../MongoConnection/mongoCollection");



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

    const userCollection = await users();

    let nameOfUser = username.toLowerCase();

    const foundUser = await userCollection.findOne({username:nameOfUser});

    let userId = foundUser._id;

    console.log(userId);

    const jobCollection = await jobListings();

    const companyCollection = await companyList();

    const companyName = company.toLowerCase();


    let foundCompany = await companyCollection.findOne({company:companyName});

    //console.log(foundCompany);


      
  
    const newJobInfo = {
      jobTitle: jobTitle,
      education: education,
      yearsofExp: yearsofExp,
      description: description,
      company: companyName,
      postDate: postDate,
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





      /*const jobCollection = await jobListings();
      const userCollection = await users ();
      const foundUser = await userCollection.findOne({username:username});
      if (!foundUser) throw "Wrong username!";
      //we need the id of the person who created the job
     // console.log(foundUser);
     // let userID = foundUser._id.toString();

      let userID = foundUser._id.toHexString()

      console.log(userID);


      const companyCollection = await companyList();

      let companyName = company.toLowerCase();

      //console.log(companyName);

      const foundCompany = await companyCollection.findOne({company:companyName});
      //console.log("foundCompany: ", foundCompany);
      if(!foundCompany) {
      throw "Sorry. This Company exists. Please enter a distinct name.";
    }


    //console.log(foundCompany);




      //console.log(userID);

     
      
  
      const newJobInfo = {
        userID: ObjectId(userID),
        jobTitle: jobTitle,
        education: education,
        yearsofExp: yearsofExp,
        description: description,
        company: companyName,
        postDate: postDate,
        username: username

        
      };

      console.log(newJobInfo);

      const oneCompany = await companyList.getCompanyByName(companyName);

     // const companyID = oneCompany._id;

     // console.log(oneCompany);



     // await companyCollection.updateMany({ company: companyName }, { $push: { jobs: newJobInfo } });

      console.log("1");
   
  
      const insertInfo = await jobCollection.insertOne(newJobInfo);
      if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw 'Could not add job';
  
    console.log(newJobInfo);
      return newJobInfo;*/

  
  };




module.exports = {getAllJobs, getJobByCompany, createJob};